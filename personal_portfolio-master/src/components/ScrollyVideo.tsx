"use client";

import { useScroll, useSpring, MotionValue } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface ScrollyVideoProps {
  src: string;
  children?: (progress: MotionValue<number>) => ReactNode;
}

export default function ScrollyVideo({ src, children }: ScrollyVideoProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTimeRef = useRef(0);
  const seekingRef = useRef(false);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll value
  const springScroll = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 400,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Seeking for every scroll update queues decoder work, which makes a
    // scroll-controlled video stutter. Keep only the newest requested frame
    // and wait for the current seek to finish before requesting the next one.
    const seekToTarget = () => {
      if (seekingRef.current || !Number.isFinite(video.duration) || video.duration <= 0) return;

      const nextTime = Math.max(0, Math.min(targetTimeRef.current, video.duration));
      if (Math.abs(video.currentTime - nextTime) < 0.01) return;

      seekingRef.current = true;
      if (typeof video.fastSeek === "function") {
        video.fastSeek(nextTime);
      } else {
        video.currentTime = nextTime;
      }
    };

    const unsubscribe = springScroll.on("change", (progress) => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      targetTimeRef.current = progress * video.duration;
      seekToTarget();
    });

    const handleSeeked = () => {
      seekingRef.current = false;
      seekToTarget();
    };
    const handleLoadedMetadata = () => {
      targetTimeRef.current = springScroll.get() * video.duration;
      seekToTarget();
    };

    video.addEventListener("seeked", handleSeeked);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      unsubscribe();
      video.removeEventListener("seeked", handleSeeked);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [springScroll]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          src={src}
          className="h-full w-full object-cover"
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
        />
        {/* Render children (Overlay) passing the springScroll value */}
        {children && children(springScroll)}
      </div>
    </div>
  );
}

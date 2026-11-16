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
  const frameRequestRef = useRef<number | null>(null);

  // Scroll progress for the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll value
  const springScroll = useSpring(scrollYProgress, {
    damping: 42,
    stiffness: 260,
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Apply only the latest scroll position once per animation frame. Waiting
    // for a seeked event makes touch scrolling pause between decoded frames.
    const updateVideoFrame = () => {
      frameRequestRef.current = null;
      if (Number.isFinite(video.duration) && video.duration > 0) {
        const nextTime = Math.max(0, Math.min(targetTimeRef.current, video.duration));
        if (Math.abs(video.currentTime - nextTime) >= 0.004) {
          video.currentTime = nextTime;
        }
      }
    };

    const scheduleVideoFrame = () => {
      if (frameRequestRef.current === null) {
        frameRequestRef.current = requestAnimationFrame(updateVideoFrame);
      }
    };

    const unsubscribe = springScroll.on("change", (progress) => {
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      targetTimeRef.current = progress * video.duration;
      scheduleVideoFrame();
    });

    const handleLoadedMetadata = () => {
      targetTimeRef.current = springScroll.get() * video.duration;
      scheduleVideoFrame();
    };

    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    return () => {
      unsubscribe();
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      if (frameRequestRef.current !== null) {
        cancelAnimationFrame(frameRequestRef.current);
      }
    };
  }, [springScroll]);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden">
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

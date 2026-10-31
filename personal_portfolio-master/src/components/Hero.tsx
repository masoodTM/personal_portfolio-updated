"use client";

import ScrollyVideo from "@/components/ScrollyVideo";
import Overlay from "@/components/Overlay";

export default function Hero() {
  return (
    <div className="relative" id="home">
      <ScrollyVideo src="/hero-video-optimized_202609050726.mp4">
        {(progress: any) => <Overlay scrollYProgress={progress} />}
      </ScrollyVideo>
    </div>
  );
}

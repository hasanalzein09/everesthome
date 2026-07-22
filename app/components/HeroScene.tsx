"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-40 h-40 rounded-full bg-accent/10 animate-pulse" />
    </div>
  ),
});

export default function HeroScene() {
  return (
    <div className="h-[320px] sm:h-[400px] lg:h-[480px] w-full">
      <Scene3D />
    </div>
  );
}

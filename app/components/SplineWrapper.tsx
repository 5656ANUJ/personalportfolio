"use client";

import React from "react";
import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center text-[#9AE600]/50 tracking-widest text-sm animate-pulse font-mono">
      Loading 3D Environment...
    </div>
  ),
});

export default function SplineWrapper() {
  return (
    <Spline scene="https://prod.spline.design/ppBVHvCUg6TJ8ywX/scene.splinecode" />
  );
}

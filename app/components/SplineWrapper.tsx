"use client";

import React, { useState, useEffect } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      // Disable spline on mobile and small tablets for better performance
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMounted) return null;

  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center pointer-events-none text-white/30 text-xs font-mono tracking-widest px-4 text-center">
        {/* Empty container on mobile to save performance */}
      </div>
    );
  }

  return (
    <Spline scene="https://prod.spline.design/ppBVHvCUg6TJ8ywX/scene.splinecode" />
  );
}

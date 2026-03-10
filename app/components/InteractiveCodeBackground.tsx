"use client";

import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
} from "framer-motion";

const snippets = [
  {
    text: 'const developer = "Anuj";',
    x: 10,
    y: 15,
    size: 1.2,
    opacity: 0.25,
    duration: 15,
  },
  {
    text: 'const stack = ["React", "AI", "Next.js"];',
    x: 70,
    y: 10,
    size: 1,
    opacity: 0.2,
    duration: 20,
  },
  {
    text: 'function buildFuture() {\n  return "AI + Web";\n}',
    x: 5,
    y: 55,
    size: 0.9,
    opacity: 0.15,
    duration: 18,
  },
  {
    text: 'const projects = ["MentorHub", "HealthCampHub"];',
    x: 65,
    y: 75,
    size: 1.1,
    opacity: 0.2,
    duration: 17,
  },
  {
    text: "while (alive) { code(); }",
    x: 80,
    y: 40,
    size: 1,
    opacity: 0.15,
    duration: 22,
  },
  {
    text: '<Spline scene="..." />',
    x: 15,
    y: 85,
    size: 0.8,
    opacity: 0.2,
    duration: 14,
  },
  {
    text: 'import { motion } from "framer-motion";',
    x: 55,
    y: 25,
    size: 0.9,
    opacity: 0.1,
    duration: 25,
  },
  {
    text: "await buildPortfolio();",
    x: 20,
    y: 35,
    size: 1.1,
    opacity: 0.15,
    duration: 19,
  },
];

export default function InteractiveCodeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Use Framer Motion values to avoid React re-renders on every frame
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Add smooth spring physics to the cursor movement
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, mouseX, mouseY]);

  // Create a reactive template for the mask and glow
  const maskImage = useMotionTemplate`radial-gradient(circle 350px at ${smoothX}px ${smoothY}px, black 20%, transparent 80%)`;

  // Create motion templates for the glow effect positioning
  const glowX = useMotionTemplate`calc(${smoothX}px - 150px)`;
  const glowY = useMotionTemplate`calc(${smoothY}px - 150px)`;

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      ref={containerRef}
    >
      <motion.div
        className="w-full h-full absolute inset-0 transition-opacity duration-300 will-change-[mask-image]"
        style={
          isMobile
            ? {}
            : {
                WebkitMaskImage: maskImage,
                maskImage: maskImage,
              }
        }
      >
        {!isMobile && (
          <motion.div
            className="absolute rounded-full blur-[80px] pointer-events-none will-change-transform"
            style={{
              x: glowX,
              y: glowY,
              width: 300,
              height: 300,
              background:
                "radial-gradient(circle, rgba(154,230,0,0.3) 0%, rgba(154,230,0,0) 70%)",
            }}
          />
        )}

        {snippets.map((snippet, idx) => (
          <motion.div
            key={idx}
            className="absolute font-mono text-[#9AE600] whitespace-pre font-bold tracking-tight will-change-transform"
            style={{
              left: `${snippet.x}%`,
              top: `${snippet.y}%`,
              fontSize: `${snippet.size}rem`,
              opacity: isMobile ? snippet.opacity * 0.5 : snippet.opacity,
              textShadow:
                "0 0 15px rgba(154,230,0,0.8), 0 0 30px rgba(154,230,0,0.4)",
              filter: `blur(${idx % 2 === 0 ? "0.5px" : "0px"})`,
            }}
            animate={{
              y: ["0%", "-10%", "0%"],
              x: ["0%", "2%", "0%"],
            }}
            transition={{
              duration: snippet.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {snippet.text}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

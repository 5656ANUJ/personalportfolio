"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { div } from "framer-motion/client";

const projects = [
  {
    id: 1,
    year: "2025",
    title: "Telecom mobile application",
    description:
      "Onboarding, face scan, product recommendations, and streak-based logging—designing end-to-end engagement for skincare users.",
    image: "/mockups/telecom-app.png",
  },
  {
    id: 2,
    year: "2024",
    title: "Fintech Dashboard System",
    description:
      "Comprehensive financial visualization with real-time analytics, transaction monitoring, and automated reporting systems.",
    image: "/mockups/fintech.png",
  },
  {
    id: 3,
    year: "2023",
    title: "E-commerce Experience",
    description:
      "Modern shopping platform focused on seamless user journeys, personalized recommendations, and high-conversion checkout flows.",
    image: "/mockups/ecommerce.png",
  },
];

export default function ProjectSec() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      className="relative w-full mt-20 h-screen"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="relative z-20 mb-10 flex justify-center">
        <div
          className="
  inline-flex h-8.5 items-center justify-end rounded-3xl 
  pt-1 pr-8 pb-1 pl-8
  bg-[#1A1A1A] [background-blend-mode:plus-lighter]
  backdrop-blur-[6px]
  shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.5),inset_2px_2px_1px_-2px_#B3B3B3,inset_-2px_-2px_1px_-2px_#B3B3B3,inset_0_0_0_1px_#999,inset_0_0_22px_0_rgba(242,242,242,0.5)]
  translate-y-20
"
        >
          <span>Projects</span>
        </div>
      </div>

      {projects.map((project, index) => {
        // Only used for subtle scale depth (NO blur)
        const scale = useTransform(
          scrollYProgress,
          [index / projects.length, 1],
          [1, 0.96],
        );

        return (
          <div
            key={project.id}
            className="sticky top-0 h-screen flex items-center justify-center"
            style={{ zIndex: index + 1 }}
          >
            <motion.div
              style={{ scale, willChange: "transform" }}
              className="
    relative w-[90%] h-[520px]
    rounded-[32px]
    bg-black/60
    overflow-hidden
    transform-gpu
  "
            >
              {/* GLASS SURFACE — blurs ONLY what's behind */}
              <div
                className="
      pointer-events-none
      absolute inset-0
      rounded-[32px]
      backdrop-blur-2xl
      bg-white/10
      z-10
    "
              />

              {/* INNER SHINE */}
              <div
                className="
      pointer-events-none
      absolute inset-0
      rounded-[32px]
      shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)]
      z-20
    "
              />

              {/* ✅ CONTENT — ABOVE GLASS */}
              <div className="relative z-30 flex h-full items-center justify-between px-14">
                {/* LEFT IMAGE */}
                <div className="w-1/2 h-full flex items-center justify-center">
                  <div className="w-[420px] h-[420px] rounded-2xl bg-white/5 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="w-1/2 flex flex-col justify-center text-white pl-10">
                  <span className="text-lg text-white/60 mb-3">
                    {project.year}
                  </span>

                  <h2 className="text-4xl font-semibold leading-tight mb-4">
                    {project.title}
                  </h2>

                  <p className="text-white/70 text-lg max-w-md leading-relaxed">
                    {project.description}
                  </p>

                  <button
                    className="
          mt-10 w-fit px-10 py-4 rounded-full
          bg-lime-400 text-black font-semibold
          hover:scale-105 transition-transform
          shadow-[0_0_30px_rgba(163,230,53,0.6)]
        "
                  >
                    View Case Study
                  </button>
                </div>
              </div>

              {/* EDGE VIGNETTE */}
              <div
                className="
      pointer-events-none
      absolute inset-0
      rounded-[32px]
      shadow-[inset_0_0_90px_rgba(0,0,0,0.85)]
      z-40
    "
              />
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}

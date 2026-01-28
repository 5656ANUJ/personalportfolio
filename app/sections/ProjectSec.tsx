"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionWrapper from "../components/SectionWrapper";

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
    <div id="projects" className="relative w-full py-10">
      <div className="relative flex justify-center">
        <div
          className="
    inline-flex h-8.5 items-center justify-end rounded-3xl 
    pt-1 pr-8 pb-1 pl-8
    bg-[#1A1A1A] [background-blend-mode:plus-lighter]
    backdrop-blur-[6px]
    shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.5),inset_2px_2px_1px_-2px_#B3B3B3,inset_-2px_-2px_1px_-2px_#B3B3B3,inset_0_0_0_1px_#999,inset_0_0_22px_0_rgba(242,242,242,0.5)]
    translate-y-25
    "
        >
          <span>Projects</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative w-full flex flex-col items-center gap-10 md:gap-0"
      >
        {projects.map((project, index) => {
          // Mobile: No sticky, just list them. Desktop: Sticky and stack.
          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              range={[index / projects.length, 1]}
              targetRef={containerRef}
              total={projects.length}
            />
          );
        })}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: any; // Using any for simplicity as project type isn't exported, but ideally should be typed
  index: number;
  range: any;
  targetRef: any;
  total: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  range,
  targetRef,
  total,
}) => {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, range, [1, 0.96]);

  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  return (
    <div className="relative md:sticky md:top-10 w-full min-h-auto md:min-h-screen flex items-center justify-center px-4 md:px-10 overflow-visible md:overflow-hidden py-10 md:py-0">
      <motion.div
        style={{
          scale: isDesktop ? scale : 1,
          top: isDesktop ? `calc(10vh + ${index * 20}px)` : 0,
        }}
        className="
    relative w-full max-w-6xl h-auto md:h-[550px]
    rounded-[32px]
    bg-black/60
    overflow-hidden
    transform-gpu
    border border-white/5
    flex flex-col md:flex-row
    mb-10 md:mb-0
  "
      >
        {/* GLASS SURFACE */}
        <div className="pointer-events-none absolute inset-0 backdrop-blur-2xl bg-white/5 z-0" />

        {/* LEFT IMAGE (Top on mobile) */}
        <div className="w-full md:w-1/2 h-[250px] md:h-full flex items-center justify-center z-10 p-6 bg-white/5">
          <div className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain md:object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-white p-6 md:p-8 md:pl-10 z-10 pb-10 md:pb-8">
          <span className="text-sm md:text-lg text-white/60 mb-2">
            {project.year}
          </span>
          <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4">
            {project.title}
          </h2>
          <p className="text-white/70 text-sm md:text-base max-w-md leading-relaxed mb-6 md:mb-8">
            {project.description}
          </p>
          <button
            className="
          w-fit px-6 py-2 md:px-8 md:py-3 rounded-full
          bg-lime-400 text-black font-semibold text-sm md:text-base
          hover:scale-105 transition-transform
          shadow-[0_0_30px_rgba(163,230,53,0.6)]
        "
          >
            View Case Study
          </button>
        </div>
      </motion.div>
    </div>
  );
};

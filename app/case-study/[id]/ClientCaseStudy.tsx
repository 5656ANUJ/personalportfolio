"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Project } from "@/app/lib/projectsData";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle2,
  ChevronRight,
  LayoutTemplate,
  Zap,
  Database,
  Search,
  Target,
  Users,
  MonitorSmartphone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Reusable Animation Variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export default function ClientCaseStudy({ project }: { project: Project }) {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="bg-[#0B0F0C] min-h-screen text-white font-sans overflow-hidden selection:bg-[#22C55E]/30 selection:text-white pb-20"
    >
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            href="/#projects"
            className="pointer-events-auto group flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              Back to Projects
            </span>
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
        {/* 1. HERO SECTION */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center text-center mt-10 md:mt-20 mb-32"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#22C55E]/10 border border-[#22C55E]/20 text-[#22C55E] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse"></span>
            Case Study • {project.year}
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-3xl text-gray-400 max-w-3xl mb-12 font-light"
          >
            {project.tagline}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex gap-6 z-10 relative">
            {project.liveDemoLink && (
              <a
                href={project.liveDemoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-[#22C55E] hover:bg-[#1ea950] text-black rounded-full font-semibold transition-transform hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              >
                Live Demo <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold transition-transform hover:scale-105"
              >
                GitHub <Github className="w-4 h-4" />
              </a>
            )}
          </motion.div>

          {/* Main Hero Image */}
          <motion.div
            variants={fadeInUp}
            className="w-full mt-24 relative rounded-4xl overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(34,197,94,0.1)] group"
          >
            <div className="absolute inset-0 bg-linear-to-t from-[#0B0F0C] via-transparent to-transparent z-10" />
            <img
              src={project.mockups[0] || project.images[0]}
              alt={`${project.title} Hero`}
              className="w-full h-[50vh] md:h-[70vh] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </motion.section>

        {/* 2. PROJECT OVERVIEW */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-[#22C55E]" />
              The Challenge
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {project.problemStatement}
            </p>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-[#22C55E]" />
              The Solution
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              {project.solution}
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">
              Key Outcomes
            </h3>
            <ul className="space-y-4">
              {project.keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#22C55E] shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-lg">{outcome}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* 3. PROJECT DETAILS GRID */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-40"
        >
          {[
            { label: "Role", value: project.role },
            { label: "Duration", value: project.duration },
            { label: "Target Users", value: project.targetUsers },
            { label: "Platform", value: "Web / Mobile" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/10 transition-colors"
            >
              <p className="text-gray-500 text-sm md:text-base font-medium mb-2 uppercase tracking-wider">
                {item.label}
              </p>
              <p className="text-white text-lg md:text-xl font-semibold">
                {item.value}
              </p>
            </motion.div>
          ))}
        </motion.section>

        {/* 4. METRICS SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center text-center p-12 rounded-4xl bg-linear-to-b from-[#22C55E]/10 to-transparent border border-[#22C55E]/20"
              >
                <h3 className="text-6xl md:text-7xl font-bold text-[#22C55E] mb-4 tracking-tighter shadow-sm">
                  {metric.value}
                </h3>
                <p className="text-gray-400 text-xl font-medium">
                  {metric.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 5. VISUAL SHOWCASE (Parallax Mockups) */}
        <motion.section className="mb-40 relative group">
          <div className="absolute -inset-10 bg-[#22C55E]/5 blur-[100px] rounded-full z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          <div className="relative z-10 flex flex-col items-center">
            {project.mockups[1] && (
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
              >
                <img
                  src={project.mockups[1]}
                  alt="Product UI"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            )}
          </div>
        </motion.section>

        {/* 6. FEATURE BREAKDOWN */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40"
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Core functionalities that power the experience.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(34,197,94,0.15)] group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 7. DEVELOPMENT PROCESS */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-40"
        >
          <motion.div variants={fadeInUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Process</h2>
            <p className="text-xl text-gray-400 max-w-2xl">
              From concept to deployment.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                title: "Research & Strategy",
                desc: project.developmentProcess.research,
                icon: <Search className="w-6 h-6 text-[#22C55E]" />,
              },
              {
                title: "UX/UI Design",
                desc: project.developmentProcess.design,
                icon: <LayoutTemplate className="w-6 h-6 text-[#22C55E]" />,
              },
              {
                title: "Development",
                desc: project.developmentProcess.development,
                icon: <Database className="w-6 h-6 text-[#22C55E]" />,
              },
              {
                title: "Testing & Launch",
                desc: project.developmentProcess.testing,
                icon: <MonitorSmartphone className="w-6 h-6 text-[#22C55E]" />,
              },
            ].map((step, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-center bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10"
              >
                <div className="w-16 h-16 rounded-full bg-[#22C55E]/10 flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 8. IMAGE GALLERY */}
        {project.images.length > 2 && (
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-40 w-full overflow-hidden"
          >
            <div className="flex gap-6 overflow-x-auto pb-10 snap-x snap-mandatory scrollbar-hide py-10 px-4 md:-mx-12 md:px-12">
              {project.images.slice(1).map((img, idx) => (
                <div
                  key={idx}
                  className="min-w-[85vw] md:min-w-[60vw] snap-center rounded-4xl overflow-hidden border border-white/10 shadow-xl shrink-0"
                >
                  <img
                    src={img}
                    alt={`Gallery ${idx}`}
                    className="w-full h-[50vh] md:h-[60vh] object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* 9. FINAL CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center py-20 rounded-[3rem] bg-linear-to-b from-white/5 to-transparent border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#22C55E]/10 blur-[120px] rounded-full z-0" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to start a project?
            </h2>
            <Link
              href="/#projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#22C55E] text-black font-semibold rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(34,197,94,0.4)]"
            >
              Explore More Work <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

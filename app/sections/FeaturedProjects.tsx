"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/app/lib/projectsData";

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-10 bg-[#0A0A0A] text-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-start">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Selected{" "}
            <span className="text-[#9AE600] drop-shadow-[0_0_15px_rgba(154,230,0,0.3)]">
              Work
            </span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl">
            A collection of projects where I explored real-world problems using
            modern web technologies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {projectsData.map((project) => (
            <div
              key={project.slug}
              className="group relative rounded-3xl bg-[#141414] overflow-hidden border border-white/5 hover:border-[#9AE600]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(154,230,0,0.15)] flex flex-col will-change-transform"
            >
              {/* Project Image */}
              <div className="relative h-62.5 md:h-87.5 w-full overflow-hidden bg-[#1c241f]">
                {project.images && project.images.length > 0 ? (
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/20">
                    No Image Available
                  </div>
                )}
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/20 to-transparent z-10" />
                {/* Year Badge */}
                <div className="absolute top-6 right-6 z-20 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-[#9AE600] border border-white/10 shadow-[0_0_10px_rgba(154,230,0,0.2)]">
                  {project.year}
                </div>
              </div>

              {/* Project Content */}
              <div className="relative z-20 p-6 md:p-8 grow flex flex-col justify-end -mt-20">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-[#9AE600] transition-colors">
                  {project.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/40">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#9AE600] text-black font-bold py-3 px-6 rounded-full hover:bg-[#b0f522] transition-all text-sm md:text-base shadow-[0_0_15px_rgba(154,230,0,0.4)] hover:shadow-[0_0_25px_rgba(154,230,0,0.6)]"
                  >
                    View Case Study <ExternalLink size={18} />
                  </Link>
                  {project.githubLink && (
                    <Link
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center p-3 rounded-full bg-white/10 border border-white/5 hover:bg-white/20 hover:border-[#9AE600]/50 hover:text-[#9AE600] transition-all text-white hover:shadow-[0_0_20px_rgba(154,230,0,0.2)]"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-20 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:border-[#9AE600] hover:text-[#9AE600] hover:drop-shadow-[0_0_15px_rgba(154,230,0,0.4)] transition-all duration-300 bg-white/5 backdrop-blur-sm"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { projectsData } from "@/app/lib/projectsData";
import ProjectCard from "@/app/components/projects/ProjectCard";

export default function ProjectSec() {
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div id="projects" className="relative w-full py-24 bg-[#0b0f0c]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center justify-center rounded-3xl pt-1 pr-8 pb-1 pl-8 bg-[#1A1A1A] [background-blend-mode:plus-lighter] backdrop-blur-[6px] shadow-[inset_3px_3px_0.5px_-3.5px_rgba(255,255,255,0.5),inset_2px_2px_1px_-2px_#B3B3B3,inset_-2px_-2px_1px_-2px_#B3B3B3,inset_0_0_0_1px_#999,inset_0_0_22px_0_rgba(242,242,242,0.5)] mb-8">
              <span className="text-white text-sm font-medium tracking-wide">
                Featured Projects
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Selected{" "}
              <span className="text-[#9AE600] drop-shadow-[0_0_15px_rgba(154,230,0,0.3)]">
                Works
              </span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="hidden md:inline-flex items-center gap-2 text-white hover:text-[#9AE600] font-medium transition-colors border-b border-transparent hover:border-[#9AE600] hover:drop-shadow-[0_0_10px_rgba(154,230,0,0.8)] pb-1"
          >
            View All Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {/* CTA Button (Mobile) */}
        <div className="flex justify-center md:hidden">
          <Link
            href="/projects"
            className="px-8 py-4 rounded-full bg-[#111814] border border-white/10 text-white font-medium hover:border-[#9AE600]/50 hover:text-[#9AE600] transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(154,230,0,0.4)]"
          >
            View All Projects
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5L19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

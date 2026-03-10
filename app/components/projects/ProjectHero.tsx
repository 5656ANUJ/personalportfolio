import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/lib/projectsData";

export default function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-3/4 bg-[#9AE600]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {project.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 leading-relaxed">
          {project.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          {project.liveDemoLink && (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#9AE600] text-black font-semibold hover:bg-[#b0f522] transition-colors shadow-[0_0_15px_rgba(154,230,0,0.4)] hover:shadow-[0_0_25px_rgba(154,230,0,0.6)]"
            >
              Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors border border-white/5 hover:border-[#9AE600]/50 hover:text-[#9AE600] hover:shadow-[0_0_20px_rgba(154,230,0,0.2)]"
            >
              GitHub Repo
            </a>
          )}
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          {project.images && project.images.length > 0 && (
            <Image
              src={project.images[0]}
              alt={`${project.title} Preview`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          )}
        </div>
      </div>
    </section>
  );
}

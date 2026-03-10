import Image from "next/image";
import Link from "next/link";
import { Project } from "@/app/lib/projectsData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <div className="relative h-full flex flex-col rounded-2xl bg-[#111814] border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#9AE600]/50 hover:shadow-[0_0_30px_rgba(154,230,0,0.15)] hover:-translate-y-1 will-change-transform">
        {/* Image Container */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1c241f]">
          {project.images && project.images.length > 0 ? (
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105 will-change-transform"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white/20">
              No Image Available
            </div>
          )}
          {/* Top Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111814] via-transparent to-transparent opacity-80" />

          {/* Year Badge */}
          <div className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-[#9AE600] border border-white/10">
            {project.year}
          </div>
        </div>

        {/* Content Details */}
        <div className="flex flex-col flex-grow p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-[#9AE600] transition-colors">
            {project.title}
          </h3>

          <p className="text-white/60 text-sm sm:text-base mb-6 line-clamp-2">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="mt-auto pt-4 flex flex-wrap gap-2 border-t border-white/5">
            {project.techStack.slice(0, 3).map((tech, index) => (
              <span
                key={index}
                className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/70"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="rounded-md bg-white/5 px-2.5 py-1 text-xs font-medium text-white/40">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

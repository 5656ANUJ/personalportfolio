import Image from "next/image";
import { Project } from "@/app/lib/projectsData";

export default function ProjectGallery({ project }: { project: Project }) {
  const displayImages = project.mockups || project.images;

  if (!displayImages || displayImages.length === 0) return null;

  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Project Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayImages.map((imgSrc, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group ${
                idx === 2 && displayImages.length === 3 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`relative ${idx === 2 && displayImages.length === 3 ? "aspect-[21/9]" : "aspect-video"} w-full`}
              >
                <Image
                  src={imgSrc}
                  alt={`${project.title} screenshot ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

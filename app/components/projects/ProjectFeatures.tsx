import { Project } from "@/app/lib/projectsData";

export default function ProjectFeatures({ project }: { project: Project }) {
  if (!project.features || project.features.length === 0) return null;

  return (
    <section className="py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Core Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#111814] border border-white/5 hover:border-[#9AE600]/30 transition-colors group"
            >
              <div className="w-14 h-14 rounded-full bg-[#9AE600]/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

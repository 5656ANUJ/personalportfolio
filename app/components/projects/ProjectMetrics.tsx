import { Project } from "@/app/lib/projectsData";

export default function ProjectMetrics({ project }: { project: Project }) {
  if (!project.metrics || project.metrics.length === 0) return null;

  return (
    <section className="py-16 bg-[#9AE600]/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#9AE600]/10 to-transparent pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {project.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-[#111814]/80 backdrop-blur-sm rounded-2xl border border-white/5"
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {metric.value}
              </div>
              <div className="text-[#9AE600] font-medium tracking-wide uppercase text-sm">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

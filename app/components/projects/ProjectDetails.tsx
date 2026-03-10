import { Project } from "@/app/lib/projectsData";

export default function ProjectDetails({ project }: { project: Project }) {
  const details = [
    { label: "Role", value: project.role },
    { label: "Duration", value: project.duration },
    { label: "Tech Stack", value: project.techStack.join(", ") },
  ];

  return (
    <section className="py-16 bg-[#111814] border-y border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {details.map((detail, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#1c241f] border border-white/5"
            >
              <h3 className="text-white/50 text-sm font-medium uppercase tracking-wider mb-2">
                {detail.label}
              </h3>
              <p className="text-white font-medium text-lg">{detail.value}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-[#9AE600]/10 to-transparent border border-[#9AE600]/20 rounded-2xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-xl">⚠️</span> Key Challenges
          </h3>
          <p className="text-white/80 leading-relaxed text-lg">
            {project.challenges}
          </p>
        </div>
      </div>
    </section>
  );
}

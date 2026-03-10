import { Project } from "@/app/lib/projectsData";

export default function ProjectProcess({ project }: { project: Project }) {
  const steps = [
    {
      id: "01",
      name: "Research",
      description: project.developmentProcess.research,
    },
    {
      id: "02",
      name: "Design",
      description: project.developmentProcess.design,
    },
    {
      id: "03",
      name: "Development",
      description: project.developmentProcess.development,
    },
    {
      id: "04",
      name: "Testing",
      description: project.developmentProcess.testing,
    },
  ];

  return (
    <section className="py-24 bg-[#111814] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
          Development Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connection Line (hidden on mobile, visible on lg) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-[100%] h-[1px] bg-gradient-to-r from-[#9AE600]/50 to-transparent z-0" />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-black border border-[#9AE600] flex items-center justify-center text-[#9AE600] font-bold mb-6 shadow-[0_0_15px_rgba(154,230,0,0.3)]">
                  {step.id}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {step.name}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

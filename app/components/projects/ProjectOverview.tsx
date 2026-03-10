import { Project } from "@/app/lib/projectsData";

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <section className="py-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column (Problem & Solution) */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="text-[#9AE600]">01.</span> The Problem
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {project.problemStatement}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="text-[#9AE600]">02.</span> The Solution
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Right Column (Target Users & Outcomes) */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4 flex items-center gap-3">
                <span className="text-[#9AE600]">03.</span> Target Users
              </h2>
              <p className="text-white/70 leading-relaxed text-lg">
                {project.targetUsers}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                <span className="text-[#9AE600]">04.</span> Key Outcomes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyOutcomes.map((outcome, idx) => (
                  <div
                    key={idx}
                    className="bg-[#111814] border border-white/5 rounded-xl p-5 flex items-start gap-3"
                  >
                    <div className="mt-1 text-[#9AE600]">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-white/80">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

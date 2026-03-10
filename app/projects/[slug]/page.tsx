import { notFound } from "next/navigation";
import { projectsData } from "@/app/lib/projectsData";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectHero from "@/app/components/projects/ProjectHero";
import ProjectOverview from "@/app/components/projects/ProjectOverview";
import ProjectDetails from "@/app/components/projects/ProjectDetails";
import ProjectFeatures from "@/app/components/projects/ProjectFeatures";
import ProjectMetrics from "@/app/components/projects/ProjectMetrics";
import ProjectGallery from "@/app/components/projects/ProjectGallery";
import ProjectProcess from "@/app/components/projects/ProjectProcess";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#0b0f0c] min-h-screen text-white flex flex-col font-sans">
      <Navbar />

      <main className="grow pb-24">
        {/* Back Button Overlay */}
        <div className="max-w-[1200px] mx-auto px-6 pt-32 hidden lg:block">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#9AE600] transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Projects</span>
          </Link>
        </div>

        <ProjectHero project={project} />
        <ProjectOverview project={project} />
        <ProjectDetails project={project} />
        <ProjectFeatures project={project} />
        <ProjectMetrics project={project} />
        <ProjectGallery project={project} />
        <ProjectProcess project={project} />
      </main>

      <Footer />
    </div>
  );
}

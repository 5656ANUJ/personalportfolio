import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projectsData } from "@/app/lib/projectsData";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ProjectCard from "@/app/components/projects/ProjectCard";

export const metadata = {
  title: "All Projects | Personal Portfolio",
  description:
    "A collection of all my projects, case studies, and web development work.",
};

export default function AllProjectsPage() {
  return (
    <div className="bg-[#0b0f0c] min-h-screen text-white flex flex-col font-sans">
      <Navbar />

      <main className="grow pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/60 hover:text-[#9AE600] transition-colors mb-8"
            >
              <ArrowLeft size={20} />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              All{" "}
              <span className="text-[#9AE600] drop-shadow-[0_0_15px_rgba(154,230,0,0.3)]">
                Projects
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl leading-relaxed">
              A complete archive of things I've built, designed, and
              experimented with.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

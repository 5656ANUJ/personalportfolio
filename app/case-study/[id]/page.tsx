import { getProjectById } from "@/app/lib/projectsData";
import { notFound } from "next/navigation";
import ClientCaseStudy from "./ClientCaseStudy";

type Params = Promise<{ id: string }>;

export default async function CaseStudyPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  return <ClientCaseStudy project={project} />;
}

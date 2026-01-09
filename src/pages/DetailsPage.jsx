import ProjectDetailsPage from "@/components/detail/detailsPage";
import { projectData } from "@/data/project.data";
import DetailedCard from "../components/card/DetailedPageCard";


export default function ProjectDetails() {
  // console.log("....................", projectData.details)
  return (
    <>
      <ProjectDetailsPage project={projectData} />;
      <DetailedCard {...projectData} columns={"grid gap-6 md:grid-cols-3"}/>
      <DetailedCard {...projectData} columns={"grid gap-6 sm:grid-cols-2 lg:grid-cols-4"} />

      </>
  )
}
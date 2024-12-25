import React from "react";
import ProjectTableRow from "./ProjectTableRow";
import NoProjects from "./NoProjects";
import "../styles/project-table.css";
import { FieldValue, Timestamp } from "firebase/firestore";
import ButtonNav from "@/app/ui/reuse-comp/button-nav";
import ProjectAPI from "@/app/api/projects.api";
import Link from "next/link";

interface Project {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  createdAt: FieldValue | Timestamp;
}

interface Props {
  projects: Project[];
  isLoading: boolean;
}

const ProjectTable = ({ projects, isLoading }: Props) => {
  const handleDeleteProject = async (projectId: string) => {
    try {
      await ProjectAPI.deleteProject(projectId);
      // Project list update after deletion.
      // window.location.reload();
    } catch (error) {
      console.error("Error deleting project: ", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center text-3xl p-10 border-dashed border rounded-lg">
        Fetching data...
      </div>
    );
  } else if (!projects.length) {
    return <NoProjects />;
  }

  return (
    <div>
      <table>
        <thead>
          <tr className="text-left">
            <th className="">ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
            <th id="action" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            // <ProjectTableRow key={project?.id} project={project} />
            <tr key={project?.id}>
              <td>{project?.id}</td>
              <td>{project?.name}</td>
              <td>{project?.description}</td>
              <td>
                {project?.createdAt instanceof Timestamp
                  ? project.createdAt.toDate().toLocaleString()
                  : "Invalid date"}
              </td>
              <td id="action-delete">
                <ButtonNav onClick={() => handleDeleteProject(project.id)}>
                  Delete
                </ButtonNav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <div id="mobile-project-list">
          {projects.map((project) => (
            <Link href={`/project-page/${project.id}`} key={project.id}>
              <div
                className="bg-gradient-to-tl from-slate-700 to-gray-500 rounded-lg shadow-lg mb-3"
                key={project.id}
              >
                <div className="flex flex-row items-start justify-between ">
                  <div className="text-2xl mb-6 pt-2 pb-2 pr-1 pl-1 rounded-md  font-bold underline underline-offset-8 decoration-dashed bg-gradient-to-r from-gray-900 to-transparent to-70%">
                    {project.name}
                  </div>
                  <ButtonNav onClick={() => handleDeleteProject(project.id)}>
                    Delete
                  </ButtonNav>
                </div>
                <div className="flex flex-col">
                  {/* <div className="text-2xl mb-6 pt-2 text-center font-bold">
                  {project.name}
                </div> */}
                  <div className="mb-4 pl-2">
                    <p className="text-lg font-bold">Project's Description</p>
                    <div className="text-md">{project.description}</div>
                  </div>
                  <div className="flex items-end justify-end pr-2 mt-4 rounded-md bg-gradient-to-l from-gray-900 to-transparent to-70%">
                    Data Created :{" "}
                    {project?.createdAt instanceof Timestamp
                      ? project.createdAt.toDate().toLocaleString()
                      : "Invalid date"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTable;

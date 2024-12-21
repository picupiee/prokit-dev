import React from "react";
import ProjectTableRow from "./ProjectTableRow";
import NoProjects from "./NoProjects";
import "../styles/project-table.css";

interface Project {
  id: string;
  name: string;
  description: string;
}

interface Props {
  projects: Project[];
}

const ProjectTable = ({ projects }: Props) => {
  if (!projects.length) return <NoProjects />;

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <ProjectTableRow key={project.id} project={project} />
        ))}
      </tbody>
    </table>
  );
};

export default ProjectTable;

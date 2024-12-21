import React from "react";

interface Project {
  id: string;
  name: string;
  description: string;
}

interface Props {
  project: Project;
}

const ProjectTableRow = ({ project }: Props) => {
  return (
    <tr>
      <td>{project.id}</td>
      <td>{project.name}</td>
      <td>{project.description}</td>
    </tr>
  );
};

export default ProjectTableRow;

import React from "react";
import ProjectTableRow from "./ProjectTableRow";
import NoProjects from "./NoProjects";
import "../styles/project-table.css";
import { FieldValue, Timestamp } from "firebase/firestore";

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: FieldValue | Timestamp;
}

interface Props {
  projects: Project[];
}

const ProjectTable = ({ projects }: Props) => {
  if (!projects.length) return <NoProjects />;

  return (
    <>
    {/* <div className="table w-full bg-blue-200">
      <div className="table-header-group bg-blue-400">
        <div className="table-row bg-blue-600">
          <div className="table-cell">ID</div>
          <div className="table-cell">Name</div>
          <div className="table-cell">Description</div>
          <div className="table-cell">Date Created</div>
          <div className="table-cell">Action</div>
        </div>
      </div>
      <div className="table-row-group">
        <div className="table-row">
        {projects.map((project) => (
          <ProjectTableRow key={project.id} project={project.name} />
        ))}
        </div>
      </div>
    </div> */}
    
    <table className="table-auto border-none bg-green-500 rounded-lg w-full">
      <thead>
        <tr className="text-left">
          <th className="">ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Created At</th>
          <th id="action" className="text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((project) => (
          <ProjectTableRow key={project.id} project={project} />
        ))}
      </tbody>
    </table>
    </>
  );
};

export default ProjectTable;

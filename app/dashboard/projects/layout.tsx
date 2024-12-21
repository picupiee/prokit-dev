import React from "react";
import { ProjectLayout } from "./ProjectLayout";
import ProjectHeader from "./page";

const ProjectPageLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="antialiased">
      <div className="mb-3">
        <ProjectHeader />
      </div>
      <div>
        <ProjectLayout />
      </div>
    </div>
  );
};

export default ProjectPageLayout;

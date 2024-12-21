"use client";

import ButtonNav from "@/app/ui/reuse-comp/button-nav";
import { ProjectLayout } from "./ProjectLayout";
import { useState } from "react";
import ProjectForm from "./components/ProjectForm";

export default function ProjectHeader() {
  const [isAddingProject, setIsAddingProject] = useState(false);

  const handleAddProjectClick = () => {
    setIsAddingProject(true);
  };

  return (
    <>
      {isAddingProject ? (
        <ProjectForm />
      ) : (
        <>
          <h1 className="text-[50px] font-semibold text-white stroke-black underline decoration-white decoration-dashed">
            Project List
          </h1>
          {/* <ButtonNav onClick={handleAddProjectClick}>Add Project</ButtonNav> */}
          <button onClick={handleAddProjectClick}>Add Project</button>
          <div className="w-full mt-3">
            <ProjectLayout />
          </div>
        </>
      )}
    </>
  );
  // return (
  //   <div className="flex flex-col items-start justify-end gap-3">
  //     <h1 className="text-[50px] font-semibold text-white stroke-black underline decoration-white decoration-dashed">
  //       Project List
  //     </h1>
  //     <ButtonNav>Add Project</ButtonNav>
  //     <div className="w-full mt-3">
  //       <ProjectLayout />
  //     </div>

  //     {/* <p className="text-white text-[24px]">You can add your projects here.</p> */}
  //   </div>
  // );
}

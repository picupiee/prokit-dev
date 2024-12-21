import React from "react";

const NoProjects = () => {
  return (
    <div className="no-projects flex flex-col justify-center items-center h-96">
      <p className="text-[20px] sm:text-[30px]">No Projects Found !</p>
      <p className="text-[14px] sm:text-[20px]">
        Start creating a Project by clicking the "Add Project" button at the top
        left.
      </p>
    </div>
  );
};

export default NoProjects;

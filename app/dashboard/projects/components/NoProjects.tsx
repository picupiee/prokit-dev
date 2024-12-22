import React from "react";

const NoProjects = () => {
  return (
    <div className="no-projects flex flex-col justify-center items-center h-96 px-5 text-center">
      <p className="text-[20px] sm:text-[30px] text-white font-bold underline underline-offset-8 decoration-wavy decoration-red-500">
        No Projects Found
      </p>
      <p className="text-[14px] sm:text-[20px] mt-4">
        Start creating a Project by clicking the "Add Project" button at the top
        left.
      </p>
    </div>
  );
};

export default NoProjects;

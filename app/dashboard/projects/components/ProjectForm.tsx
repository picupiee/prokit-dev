import ButtonNav from "@/app/ui/reuse-comp/button-nav";
import Link from "next/link";
import React from "react";

interface Project {
  name: string;
  description: string;
}

const ProjectForm = () => {
  const [project, setProject] = React.useState<Project>({
    name: "",
    description: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate and submit project data
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start justify-end mt-2 gap-3"
    >
      <label className="flex flex-col mb-2">
        Project Name:
        <input
          className="rounded-sm"
          type="text"
          value={project.name}
          onChange={(event) =>
            setProject({ ...project, name: event.target.value })
          }
        />
      </label>
      <label className="flex flex-col mb-2">
        Project's Description:
        <input
          className="rounded-sm"
          type="text"
          value={project.description}
          onChange={(event) =>
            setProject({ ...project, description: event.target.value })
          }
        />
      </label>
      <ButtonNav buttonType="submit">Create Project</ButtonNav>
      <Link href={`/dashboard/`}>
        <ButtonNav>Back to Projects</ButtonNav>
      </Link>
    </form>
  );
};

export default ProjectForm;

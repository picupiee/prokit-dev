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
    <form onSubmit={handleSubmit}>
      <label>
        Project Name:
        <input
          type="text"
          value={project.name}
          onChange={(event) =>
            setProject({ ...project, name: event.target.value })
          }
        />
      </label>
      <label>
        Project's Description:
        <input
          type="text"
          value={project.description}
          onChange={(event) =>
            setProject({ ...project, description: event.target.value })
          }
        />
      </label>

      <button type="submit">Create Project</button>
    </form>
  );
};

export default ProjectForm;

import ButtonNav from "@/app/ui/reuse-comp/button-nav";
import React from "react";
import { db } from "@/firebase";
import { FieldValue, Timestamp, addDoc, collection, serverTimestamp } from "firebase/firestore";


interface Project {
  id: string
  name: string;
  description: string;
  createdAt: FieldValue | Timestamp;
}

interface ProjectFromProps {
  onBackToProjects: () => void;
}

const ProjectForm: React.FC<ProjectFromProps> = ({ onBackToProjects }) => {
  const [project, setProject] = React.useState<Project>({
    id: "",
    name: "",
    description: "",
    createdAt: serverTimestamp(),
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Validate and submit project data to the firestore's collection
    try {
      const projectsCollectionRef = collection(db, "projects");
      await addDoc(projectsCollectionRef, {
        name: project.name,
        description: project.description,
        createdAt: serverTimestamp(),
      });
      setProject({ id: "", name: "", description: "", createdAt: serverTimestamp() });
      onBackToProjects();
      console.log("Project added successfully!");
    } catch (error) {
      console.error("Error adding project: ", error);
    }
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
    </form>
  );
};

export default ProjectForm;

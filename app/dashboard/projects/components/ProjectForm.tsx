import ButtonNav from "@/app/ui/reuse-comp/button-nav";
import React from "react";
import { db } from "@/firebase";
import {
  FieldValue,
  Timestamp,
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

interface Project {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
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
    shortDescription: "",
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
        shortDescription: project.shortDescription,
        createdAt: serverTimestamp(),
      });
      setProject({
        id: "",
        name: "",
        description: "",
        shortDescription: "",
        createdAt: serverTimestamp(),
      });
      onBackToProjects();
      console.log("Project added successfully!");
    } catch (error) {
      console.error("Error adding project: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="flex flex-col items-start justify-end mt-10 gap-5">
        <label className="flex flex-col mb-2 w-full">
          <p className="text-2xl sm:text-[40px] mb-2 font-bold">
            Project Name:
          </p>
          <input
            className="bg-transparent border-b-2 border-dotted rounded-sm sm:text-[35px] text-white active:outline-none focus:outline-none focus:placeholder:text-transparent placeholder:text-gray-300 text-xl text-center p-3"
            placeholder="Enter your project name"
            type="text"
            value={project.name}
            onChange={(event) =>
              setProject({ ...project, name: event.target.value })
            }
          />
        </label>
        <label className="flex flex-col mb-2 w-full">
          <p className="text-xl mb-2 font-bold">Short Description:</p>
          <input
            className="bg-transparent active:outline-none focus:outline-none border-2 border-dotted rounded-sm text-white placeholder:text-gray-300 text-md p-2"
            placeholder="Maximum 40 characters"
            type="text"
            maxLength={40}
            value={project.shortDescription}
            onChange={(event) =>
              setProject({ ...project, shortDescription: event.target.value })
            }
          />
        </label>
        <label className="flex flex-col mb-2 w-full">
          <p className="text-xl mb-2 font-bold">Project Description:</p>
          <textarea
            className="bg-transparent active:outline-none focus:outline-none border-2 border-dotted rounded-sm text-white placeholder:text-gray-300 text-md p-2 min-h-32"
            placeholder="Enter your project description"
            // type="text"
            value={project.description}
            onChange={(event) =>
              setProject({ ...project, description: event.target.value })
            }
          />
        </label>
      </div>
      <div className="flex justify-center items-center mt-5 drop-shadow-lg">
        <ButtonNav buttonType="submit" className="px-4 font-bold">
          Create Project
        </ButtonNav>
      </div>
    </form>
  );
};

export default ProjectForm;

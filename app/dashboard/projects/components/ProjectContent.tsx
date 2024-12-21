"use client";
import React, { useState, useEffect } from "react";
import ProjectTable from "@/app/dashboard/projects/components/ProjectTable";
import { db } from "@/firebase";
import { QueryDocumentSnapshot, collection, getDocs } from "firebase/firestore";

interface Project {
  id: string;
  name: string;
  description: string;
}

const ProjectContent = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // fetching project from Firebase's Firestore
    const fetchProjects = async () => {
      const projectsRef = collection(db, "projects");
      const projectsSnapshot = await getDocs(projectsRef);
      const projectsData: Project[] = projectsSnapshot.docs.map(
        (doc: QueryDocumentSnapshot) => doc.data() as Project
      );
      setProjects(projectsData);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <ProjectTable projects={projects} />
    </div>
  );
};

export default ProjectContent;

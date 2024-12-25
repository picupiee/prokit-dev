"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import ProjectTable from "@/app/dashboard/projects/components/ProjectTable";
import { db } from "@/firebase";
import {
  FieldValue,
  QueryDocumentSnapshot,
  Timestamp,
  collection,
  getDocs,
  onSnapshot,
} from "firebase/firestore";
import ProjectAPI from "@/app/api/projects.api";
import ButtonNav from "@/app/ui/reuse-comp/button-nav";

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: FieldValue | Timestamp;
  shortDescription: string;
}

const ProjectContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // fetching project from Firebase's Firestore
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const projectsData = await ProjectAPI.getProjects();
        setProjects(projectsData as Project[]);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();

    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const projectsData: Project[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[];
      setProjects(projectsData);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ProjectTable projects={projects} isLoading={isLoading} />
    </div>
  );
};

export default ProjectContent;

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
import ButtonNav from "@/app/ui/reuse-comp/button-nav";

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: FieldValue | Timestamp;
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
      <ProjectTable projects={projects} />
    </div>
  );
};

export default ProjectContent;

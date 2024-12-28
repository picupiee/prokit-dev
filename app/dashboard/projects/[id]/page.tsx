"use client";

import { useRouter } from "next/router";
import ProjectAPI from "@/app/api/projects.api";
import { useState, useEffect } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  createdAt: any;
}

const ProjectPage = () => {
  const router = useRouter();
  const projectId = router.query.projectId as string;

  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      setLoading(true);
      try {
        const projectData = await ProjectAPI.getProject(projectId);
        setProject(projectData as Project);
      } catch (error) {
        setError("Failed to retrieve project");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (projectId) {
      fetchProject();
    }
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>This is a project page</h1>
      {/* <h1>{project.name}</h1>
      <h1>{project.description}</h1>
      <h1>{project.shortDescription}</h1>
      <h1>{project.createdAt.toDate().toLocaleString()}</h1> */}
    </div>
  );
};

export default ProjectPage;

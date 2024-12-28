import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  FieldValue,
  Timestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { create } from "domain";

interface Project {
  [key: string]: any;
  id?: string;
  name: string;
  description: string;
  createdAt?: FieldValue | Timestamp;
}

const projectsCollection = collection(db, "projects");

const ProjectAPI = {
  async getProjects(
    projectId: string | string[] | undefined
  ): Promise<Project[]> {
    try {
      const querySnapshot = await getDocs(projectsCollection);
      return querySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          id: doc.id,
          name: data.name,
          description: data.description,
          createdAt: data.createdAt,
        };
      });
    } catch (error) {
      console.error("Error fetching projects: ", error);
      throw error;
    }
  },

  async getProject(projectId: string): Promise<Project | null> {
    const docRef = doc(db, "projects", projectId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        id: data.id,
        name: data.name,
        description: data.description,
        shortDescription: data.shortDescription,
        createdAt: data.createdAt,
      } as Project;
    } else {
      return null;
    }
  },

  async createProject(projectData: Project): Promise<any> {
    try {
      return await addDoc(projectsCollection, projectData);
    } catch (error) {
      console.error("Error creating project: ", error);
      throw error;
    }
  },

  async updateProject(projectId: string, projectData: Project): Promise<any> {
    try {
      const projectRef = doc(projectsCollection, projectId);
      return await updateDoc(projectRef, projectData);
    } catch (error) {
      console.error("Error updating project: ", error);
      throw error;
    }
  },

  async deleteProject(projectId: string): Promise<any> {
    try {
      const projectRef = doc(projectsCollection, projectId);
      return await deleteDoc(projectRef);
    } catch (error) {
      console.error("Error deleting project: ", error);
      throw error;
    }
  },
};

export default ProjectAPI;

// export const getProjects = async () => {
//   const querySnapshot = await getDocs(projectsCollection);
//   return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// };

// export const createProject = async (projectData: Project): Promise<any> => {
//   return await addDoc(projectsCollection, projectData);
// };

// export const updateProject = async (
//   projectId: string,
//   projectData: Project
// ): Promise<any> => {
//   const projectRef = doc(projectsCollection, projectId);
//   return await updateDoc(projectRef, projectData);
// };

// export const deleteProject = async (projectId: string): Promise<any> => {
//   const projectRef = doc(projectsCollection, projectId);
//   return await deleteDoc(projectRef);
// };

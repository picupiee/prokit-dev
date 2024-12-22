import React from "react";
import "../styles/project-table.css";
import { FieldValue, Timestamp } from "firebase/firestore";
// import { projectEntrypointsSubscribe } from "next/dist/build/swc/generated-native";
import ButtonNav from "@/app/ui/reuse-comp/button-nav";

interface Project {
  id: string;
  name: string;
  description: string;
  createdAt: FieldValue | Timestamp;
}

interface Props {
  project: Project;
}

const ProjectTableRow = ({ project }: Props) => {
  const prefixedId = "id#" + project.id;

  let createdAtDisplay: React.ReactNode = "Loading...";
  if (project.createdAt instanceof Timestamp) {
    const date = project.createdAt.toDate();
    createdAtDisplay = date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  }

  return (
    <tr>
      <td id="id">{prefixedId}</td>
      <td id="name">{project.name}</td>
      <td id="description">{project.description}</td>
      <td id="createdAt">{createdAtDisplay}</td>
      <td id="action-delete">
        <ButtonNav>Delete</ButtonNav>
      </td>
    </tr>
  );
};

export default ProjectTableRow;

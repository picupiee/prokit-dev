import Card from "./card";

const projectTitles = [
  "Project 1",
  "Test Project",
  "Test-1",
  "Data Collection",
];

export default function ProjectCard() {
  return (
    <div className="flex gap-4 mb-1">
      {projectTitles.map((title, index) => (
        <Card key={index} title={title} />
      ))}
      {/* <Card />
      <Card />
      <Card />
      <Card /> */}
    </div>
  );
}

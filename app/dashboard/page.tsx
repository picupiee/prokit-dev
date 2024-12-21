import Card from "../ui/dashboard/card";
import ProjectCard from "../ui/dashboard/cards-project";

export default function Home() {
  const username = "{firstName}";
  return (
    <div className="container p-1 sm:p-0">
      <main>
        <p className="text-2xl sm:text-[52px] pb-4 font-bold bg-gradient-to-l from-pink-300 from-20% to-teal-300 bg-clip-text text-transparent">
          Welcome, <strong>{username}</strong>
        </p>
        <div className="flex flex-col mt-4 mb-2">
          <p className="text-xl sm:text-2xl">Recent Project</p>
        </div>
        <div id="card-list" className="flex overflow-x-auto gap-4">
          <ProjectCard />
        </div>
        <div id="all-project" className="mt-8">
          <p className="text-xl sm:text-2xl mb-4">
            Element of All Project down here
          </p>
          <div className="flex items-start justify-start flex-wrap gap-4">
            <div className="w-[300px] h-[180px] bg-gradient-to-r from-pink-400 to-teal-400 rounded-lg shadow-lg" />
            <div className="w-[300px] h-[180px] bg-gradient-to-r from-pink-400 to-teal-400 rounded-lg shadow-lg" />
            <div className="w-[300px] h-[180px] bg-gradient-to-r from-pink-400 to-teal-400 rounded-lg shadow-lg" />
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

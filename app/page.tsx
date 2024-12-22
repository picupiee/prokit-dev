import Link from "next/link";
import ButtonNav from "./ui/reuse-comp/button-nav";

export default function Home() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-600 to-slate-800">
      <main className="flex flex-col items-center justify-center min-h-screen py-2 text-center gap-5">
        <p>Welcome to the Landing Page.</p>
        <p>Continue to the dashboard by clicking the button below</p>
        <Link href="/dashboard">
          <ButtonNav>Dashboard</ButtonNav>
        </Link>
        <div>
          <Link href="/">
            <ButtonNav>Click here to Refresh</ButtonNav>
            </Link>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

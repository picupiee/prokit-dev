import Link from "next/link";
import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <div className="flex sm:h-screen flex-col px-3 py-4 md:px-2 bg-white">
      <Link
        className="mb-2 flex h-20 items-center justify-center rounded-md bg-blue-600 p-4 md:h-20"
        href="/"
      >
        <div className="w-32 text-white md:w-40 text-[30px] text-center">
          <p>ProKit</p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 text-black">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <Link href="/">
          <form>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              {/* <PowerIcon className="w-6" /> */}
              <p>❌</p>
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </Link>
        <div className="hidden md:block text-center text-xs sm:text-sm">
          2023 ProKit®
        </div>
      </div>
    </div>
  );
}

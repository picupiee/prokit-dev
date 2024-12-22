import React from "react";
import SideNav from "../ui/dashboard/sidebar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="w-full bg-gradient-to-br from-gray-400 to-slate-800 antialiased flex flex-col min-h-screen md:flex-row md:overflow-hidden">
      <div className="w-full md:w-64 drop-shadow-lg fixed sm:fixed sm:top-0 sm:left-0">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto mt-[160px] md:mt-0 md:p-8 sm:ml-64">
        <main>{children}</main>
        {/* <footer className="text-center">
          <p>2024 ProKit®</p>
        </footer> */}
      </div>
    </div>
  );
};

export default DashboardLayout;

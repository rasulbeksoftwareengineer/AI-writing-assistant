import Navbar from "../dashboard/navbar";
import Sidebar from "../dashboard/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayouts() {
  
  return (
    <div className="h-screen overflow-x-hidden flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
import Navbar from "../dashboard/navbar";
import Sidebar from "../dashboard/sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayouts() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
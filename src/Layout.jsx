import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
// import StatsCards from "./components/StatsCards";
import "./index.css";
import { Outlet } from "react-router-dom";

function AdminPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar with toggle visibility on small and medium screens */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:static w-64 bg-teal-700 transition-transform duration-300 z-50`}
      >
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={toggleSidebar} />

        {/* Overlay for mobile and tablet sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
            onClick={toggleSidebar}
          ></div>
        )}

        {/* Main content */}
        <div className="p-4 sm:p-8">
          {/* Rendered nested routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;

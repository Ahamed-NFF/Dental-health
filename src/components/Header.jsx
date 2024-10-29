import React from "react";
import { FaBell } from "react-icons/fa";
import { MdMenu } from "react-icons/md"; // Import menu icon
import adminLogo from "/images/admin.jpg";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-sm">
      {/* Sidebar toggle button for mobile and tablet */}
      <button onClick={toggleSidebar} className="text-gray-700 lg:hidden">
        <MdMenu size={24} />
      </button>

      {/* Right-side items with auto margin on larger screens */}
      <div className="flex items-center space-x-6 ml-auto">
        {/* Notification Bell */}
        <button className="relative">
          <FaBell className="text-2xl" />
          <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-3 h-3"></span>
        </button>

        {/* Admin Info */}
        <div className="flex items-center space-x-3">
          <img
            src={adminLogo}
            alt="Admin Logo"
            className="w-10 h-10 rounded-full border-2 border-blue-500"
          />
          <div>
            <span className="block text-sm font-semibold">Moni Roy</span>
            <span className="block text-xs text-gray-500">Admin</span>
          </div>
        </div>

        {/* Log Out Button */}
        <button className="bg-teal-600 text-white px-4 py-2 rounded">
          Log out
        </button>
      </div>
    </header>
  );
};

export default Header;

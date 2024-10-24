import React from "react";
import { FaBell } from "react-icons/fa"; // Using react-icons for the bell
import adminLogo from "/images/admin.jpg"; // Assuming the image path

const Header = () => {
  return (
    <header className="flex justify-end items-center bg-white p-4 shadow-sm">
      <div className="flex items-center space-x-6">
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

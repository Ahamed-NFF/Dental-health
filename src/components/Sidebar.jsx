import React, { useState } from 'react';
import logo from "/images/Logo.png";
import {
  MdDashboard,
  MdAdminPanelSettings,
  MdMedicalServices,
  MdPeople,
  MdCalendarToday,
  MdList,
  MdMenu,
  MdClose
} from 'react-icons/md';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Toggle button for small screens */}
      <button onClick={toggleSidebar} className="text-white bg-teal-700 p-2 md:hidden">
        {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 w-64 bg-teal-700 text-white min-h-screen z-50`}>
        <div className="p-6">
          {/* Logo Section */}
          <div className="mb-10">
            <img src={logo} alt="Logo" className="w-20 mx-auto mb-2" />
            <h1 className="text-xl font-bold text-center">DN Dental Clinic</h1>
          </div>

          {/* Navigation Links */}
          <ul>
            <li className="mb-4">
              <a href="#" className="text-lg flex items-center gap-3 hover:bg-teal-800 p-3 rounded">
                <MdDashboard size={24} /> Dashboard
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-lg flex items-center gap-3 hover:bg-teal-800 p-3 rounded">
                <MdAdminPanelSettings size={24} /> Admin
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-lg flex items-center gap-3 hover:bg-teal-800 p-3 rounded">
                <MdMedicalServices size={24} /> Dentist
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-lg flex items-center gap-3 hover:bg-teal-800 p-3 rounded">
                <MdPeople size={24} /> Patient
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-lg flex items-center gap-3 hover:bg-teal-800 p-3 rounded">
                <MdCalendarToday size={24} /> Schedule
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className="text-lg flex items-center gap-3 hover:bg-teal-800 p-3 rounded">
                <MdList size={24} /> Appointment List
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Sidebar;

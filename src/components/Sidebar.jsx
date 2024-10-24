import React from 'react';
import logo from "/images/Logo.png"
import { MdDashboard, MdAdminPanelSettings, MdMedicalServices, MdPeople, MdCalendarToday, MdList } from 'react-icons/md'; // Import icons

const Sidebar = () => {
  return (
    <aside className="w-64 bg-teal-700 text-white min-h-screen">
      <div className="p-6">
        {/* Logo Section */}
        <div className="mb-10">
          <img src={logo} alt="Logo" className="w-24 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-center">DN Dental Clinic</h1>
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
  );
};

export default Sidebar;

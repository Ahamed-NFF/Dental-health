import React from 'react';
import { FaUsers, FaDollarSign, FaBox, FaClock } from 'react-icons/fa';

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Users Card */}
      <div className="bg-white p-4 md:p-6 rounded shadow flex justify-between items-center">
        <div>
          <h3 className="text-base md:text-lg">Total User</h3>
          <p className="text-3xl md:text-4xl font-bold">40,689</p>
          <p className="text-green-500 text-sm md:text-base">Up 8.5% from yesterday</p>
        </div>
        <div className="bg-purple-100 p-3 md:p-4 rounded-full flex items-center justify-center">
          <FaUsers className="text-purple-500 text-2xl md:text-3xl" />
        </div>
      </div>

      {/* Total Sales Card */}
      <div className="bg-white p-4 md:p-6 rounded shadow flex justify-between items-center">
        <div>
          <h3 className="text-base md:text-lg">Total Sales</h3>
          <p className="text-3xl md:text-4xl font-bold">$89,000</p>
          <p className="text-red-500 text-sm md:text-base">Down 4.3% from yesterday</p>
        </div>
        <div className="bg-green-100 p-3 md:p-4 rounded-full flex items-center justify-center">
          <FaDollarSign className="text-green-500 text-2xl md:text-3xl" />
        </div>
      </div>

      {/* Total Order Card */}
      <div className="bg-white p-4 md:p-6 rounded shadow flex justify-between items-center">
        <div>
          <h3 className="text-base md:text-lg">Total Order</h3>
          <p className="text-3xl md:text-4xl font-bold">10,293</p>
          <p className="text-green-500 text-sm md:text-base">Up 1.3% from past week</p>
        </div>
        <div className="bg-yellow-100 p-3 md:p-4 rounded-full flex items-center justify-center">
          <FaBox className="text-yellow-500 text-2xl md:text-3xl" />
        </div>
      </div>

      {/* Total Pending Card */}
      <div className="bg-white p-4 md:p-6 rounded shadow flex justify-between items-center">
        <div>
          <h3 className="text-base md:text-lg">Total Pending</h3>
          <p className="text-3xl md:text-4xl font-bold">2,040</p>
          <p className="text-green-500 text-sm md:text-base">Up 1.8% from yesterday</p>
        </div>
        <div className="bg-red-100 p-3 md:p-4 rounded-full flex items-center justify-center">
          <FaClock className="text-red-500 text-2xl md:text-3xl" />
        </div>
      </div>
    </div>
  );
};

export default StatsCards;

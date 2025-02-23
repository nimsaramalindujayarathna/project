import React from 'react';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900">Total Groceries</h3>
            <p className="mt-1 text-3xl font-semibold text-indigo-600">0</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900">Low Stock Items</h3>
            <p className="mt-1 text-3xl font-semibold text-yellow-600">0</p>
          </div>
        </div>
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <h3 className="text-lg font-medium text-gray-900">Expiring Soon</h3>
            <p className="mt-1 text-3xl font-semibold text-red-600">0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
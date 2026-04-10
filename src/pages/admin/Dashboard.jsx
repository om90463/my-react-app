import React, { useContext } from "react";
import AdminLayout from "../../components/layouts/AdminLayout";

const Dashboard = () => {
  return (
    <AdminLayout>
      <h2 className="text-gray-700 font-semibold text-2xl my-4">Dashboard</h2>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-5">
        <div className="bg-white shadow-lg px-5 py-5 rounded-md">
          <h2 className="text-gray-700 text-2xl font-medium">Orders</h2>
          <p className="text-gray-900 font-bold text-xl">10</p>
        </div>
        <div className="bg-white shadow-lg px-5 py-5 rounded-md">
          <h2 className="text-gray-700 text-2xl font-medium">Total Users</h2>
          <p className="text-gray-900 font-bold text-xl">10</p>
        </div>
        <div className="bg-white shadow-lg px-5 py-5 rounded-md">
          <h2 className="text-gray-700 text-2xl font-medium">Revenue</h2>
          <p className="text-gray-900 font-bold text-xl">$10</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;

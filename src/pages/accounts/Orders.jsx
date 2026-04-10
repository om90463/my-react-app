import React from "react";
import Layout from "../../components/layouts/Layout";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import SideBar from "./SideBar";

const Orders = () => {
  return (
    <Layout>
      {/* Bredcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex items-center gap-x-1 text-sm">
          <Link>Account</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Orders</Link>
        </div>
      </div>
      {/* Title */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400">Orders</div>
      </div>
      <div className="max-w-360 lg:px-8 px-5 mx-auto pt-5 pb-10">
        <div className="grid grid-cols-12 gap-5">
          {/* sidebar area */}
          <div className="col-span-3">
            <SideBar />
          </div>
          <div className="col-span-9">
            <div className="shadow-lg rounded-md">
              <h1 className="bg-gray-100 px-5 py-3 rounded-t-md text-lg font-semibold ">
                Orders
              </h1>
              <div className="overflow-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left border-b border-gray-200 text-gray-600">
                        <th className="px-3 py-2">Customer</th>
                        <th className="px-3 py-2">Email</th>
                        <th className="px-3 py-2">Phone</th>
                        <th className="px-3 py-2">Amount</th>
                        <th className="px-3 py-2">Status</th>
                        <th className="px-3 py-2">Date</th>
                        <th className="px-3 py-2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="text-left border-b border-gray-200 text-gray-600">
                        <td className="px-3 py-2 font-bold">Mohit</td>
                        <td className="px-3 py-2">mohit@example.com</td>
                        <td className="px-3 py-2">+917856436568</td>
                        <td className="px-3 py-2 font-bold">$100</td>
                        <td className="px-3 py-2">Pending</td>
                        <td className="px-3 py-2">14/02/2026</td>
                        <td className="px-3 py-2">View</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;

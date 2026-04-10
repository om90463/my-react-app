import React from "react";
import Layout from "../../components/layouts/Layout";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import SideBar from "./SideBar";

const ChangePassword = () => {
  return (
    <Layout>
      {/* Bredcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex items-center gap-x-1 text-sm">
          <Link>Account</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Change Password</Link>
        </div>
      </div>
      {/* Title */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400">Change Password</div>
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
                Change Password
              </h1>
              <form className="space-y-3 py-3 px-5" action="">
                <div className="flex flex-col mb-3">
                  <label htmlFor="" className="mb-2">
                    Old Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Old Password"
                    className="px-3 py-2 border border-gray-200 shadow rounded-md"
                  />
                  <label htmlFor="" className="mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter New Password"
                    className="px-3 py-2 border border-gray-200 shadow rounded-md"
                  />
                  <label htmlFor="" className="mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter Confirm Password"
                    className="px-3 py-2 border border-gray-200 shadow rounded-md"
                  />
                </div>
                <div className="pt-3 pb-3">
                  <Link className="bg-green-400 px-5 py-3 rounded-md text-center text-gray-800  hover:bg-gray-900 hover:text-white">
                   Change Password
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ChangePassword;

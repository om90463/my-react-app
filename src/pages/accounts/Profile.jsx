import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Layout from "../../components/layouts/Layout";
import SideBar from "./SideBar";
import BillingInfo from "./BillingInfo";

const Profile = () => {
  return (
    <Layout>
      {/* Bredcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex items-center gap-x-1 text-sm">
          <Link>Account</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Profile</Link>
        </div>
      </div>
      {/* Title */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400">Profile</div>
      </div>
      <div className="max-w-360 lg:px-8 px-5 mx-auto pt-5 pb-10">
        <div className="grid grid-cols-12 gap-5">
          {/* sidebar area */}
          <div className="col-span-3">
            <SideBar />
          </div>
          {/* form area */}
          <div className="col-span-9">
            <div className="shadow-lg rounded-md">
              <h1 className="bg-gray-100 px-5 py-3 rounded-t-md text-lg font-semibold ">
                Personal Information
              </h1>
              <form className="space-y-3 py-3 px-5" action="">
                <div className="flex flex-col">
                  <label htmlFor="" className="text-lg mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Name"
                    className="px-3 py-2 border border-gray-200 shadow rounded-md"
                  />
                  <label htmlFor="" className="text-lg mb-2">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email"
                    className="px-3 py-2 border border-gray-200 shadow rounded-md"
                  />
                  <label htmlFor="" className="text-lg mb-2">
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Phone No."
                    className="px-3 py-2 border border-gray-200 shadow rounded-md"
                  />
                </div>
                <div className="py-3">
                  <Link className="bg-green-400 px-5 py-3 rounded-md text-center text-gray-800  hover:bg-gray-900 hover:text-white">
                    Update
                  </Link>
                </div>
              </form>
            </div>
            <BillingInfo />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;

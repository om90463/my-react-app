import React from "react";
import { Link } from "react-router-dom";

const BillingInfo = () => {
  return (
    <div className="shadow-lg rounded-md px-5 py-4 border border-gray-100">
      <h2 className="text-2xl text-gray-800 font-semibold pb-3 border-b border-gray-200 mb-3">
        Billing Address
      </h2>
      <form className="space-y-3" action="">
        <div>
          <input
            type="text"
            placeholder="Enter Full Name"
            className="border w-full border-gray-200 px-3 py-3 rounded-md"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              placeholder="Enter Email"
              className="border w-full border-gray-200 px-3 py-3 rounded-md"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter Phone No"
              className="border w-full border-gray-200 px-3 py-3 rounded-md"
            />
          </div>
        </div>
        <div>
          <textarea
            placeholder="Enter Address"
            rows={3}
            className="border w-full border-gray-200 px-3 py-3 rounded-md"
          ></textarea>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <input
              type="text"
              placeholder="Enter City"
              className="border w-full border-gray-200 px-3 py-3 rounded-md"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter State"
              className="border w-full border-gray-200 px-3 py-3 rounded-md"
            />
          </div>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Zip code"
            className="border w-full border-gray-200 px-3 py-3 rounded-md"
          />
        </div>
      </form>
      <div className="py-5">
        <Link className="bg-green-400 px-5 py-3 rounded-md text-center text-gray-800  hover:bg-gray-900 hover:text-white">
          Update
        </Link>
      </div>
    </div>
  );
};

export default BillingInfo;

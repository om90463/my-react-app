import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { AdminAuthContext } from "../../context/AdminAuth";

const AdminLayout = ({children}) => {
    const { logout } = useContext(AdminAuthContext);
  return (
    <div className="bg-gray-100 flex min-h-screen">
      {/* left side bar */}
      <div className="bg-white w-64 md:block hidden">
        <div className="pt-4 px-5 pb-3">
          <Link to={"/admin/dashboard"}>
            <span className="text-3xl text-green-500 font-bold">X</span>
            <span className="text-3xl text-slate-800 font-bold">ECOMM</span>
          </Link>
        </div>
        <nav className="flex flex-col px-3">
          <Link to={'/admin/dashboard'} className="text-lg flex items-center text-gray-700 font-medium hover:bg-gray-100 px-3 py-1.5 rounded-md">
            <FaHome className="me-2" /> Dashboard
          </Link>
          <Link to={'/admin/category'} className="text-lg flex items-center text-gray-700 font-medium hover:bg-gray-100 px-3 py-1.5 rounded-md">
            <FaRegListAlt className="me-2" />
            Categorys
          </Link>
          <Link to={`/admin/subcategory`} className="text-lg flex items-center text-gray-700 font-medium hover:bg-gray-100 px-3 py-1.5 rounded-md">
            {" "}
            <FaRegListAlt className="me-2" />
            Sub Categorys
          </Link>
          <Link to={`/admin/brand`} className="text-lg flex items-center text-gray-700 font-medium hover:bg-gray-100 px-3 py-1.5 rounded-md">
            {" "}
            <FaRegListAlt className="me-2" />
            Brands
          </Link>
          <Link to={`/admin/product`} className="text-lg flex items-center text-gray-700 font-medium hover:bg-gray-100 px-3 py-1.5 rounded-md">
            {" "}
            <FaRegListAlt className="me-2" />
            Products
          </Link>
          <Link to={`/admin/order`} className="text-lg flex items-center text-gray-700 font-medium hover:bg-gray-100 px-3 py-1.5 rounded-md">
            {" "}
            <FaRegListAlt className="me-2" />
            Orders
          </Link>
        </nav>
      </div>
      {/* right container */}
      <div className="flex-1 p-5">
        <div className="bg-white rounded-md w-full px-4 py-3.5 flex justify-between">
          <div className="text-gray-700">
            Welcome,{" "}
            <span className="text-gray-900 font-bold">Mohit Singh</span>
          </div>
          <Link onClick={() => logout()} className="bg-red-400 rounded-md text-sm px-3 py-1 text-white">
            Logout
          </Link>
        </div>
       {children}
      </div>
    </div>
  );
};

export default AdminLayout;

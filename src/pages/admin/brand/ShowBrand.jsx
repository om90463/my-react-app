import React, { useEffect, useState } from "react";
import AdminLayout from "../../../components/layouts/AdminLayout";
import { Link, useParams } from "react-router-dom";
import axios from "../../../common/AdminAxios";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const ShowBrand = () => {
    const { id } = useParams();
     const [brand, setBrand] = useState([]);
  const getBrands = async () => {
    try {
      const { message, success, data } = await axios.get("/admin/brand/getAll");
      if (success) {
        setBrand(data);
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    }
  };
    const deletebrand = async (id) => {
      if(confirm("Are you sure want to delete")){
         try {
      const { message, success, data } = await axios.delete(`admin/brand/delete/${id}`);
      if (success) {
        toast.success(message);
        getBrands();
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    }
      }
  };
  useEffect(()=>{
    getBrands();
  },[])
  return (
    <AdminLayout>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-gray-700 font-semibold text-xl my-4">Brands</h2>
        <Link
          to={`/admin/brand/create`}
          className="bg-gray-900 px-4 py-2 rounded text-white"
        >
          Create
        </Link>
      </div>
      <div className="w-full">
        <table className="border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-center" width="100">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
                brand.length === 0 && <tr><td className="py-10 bg-white text-center text-gray-700 text-sm" colSpan={3}>Brand not found</td></tr>
            }
            {brand &&
              brand.map((bran) => {
                return (
                  <tr
                    key={bran._id}
                    className="border-gray-300 bg-white border-b "
                  >
                    <td className="px-3 py-2 text-left">{bran.name}</td>
                    <td className="px-3 py-2 text-left">
                      {bran.status === "active" && (
                        <p className="text-green-500">Active</p>
                      )}
                      {bran.status === "block" && (
                        <p className="text-red-500">Block</p>
                      )}
                    </td>
                    <td className="px-3 py-2">
                      <div className="flex justify-center space-x-2">
                        <Link
                          to={`/admin/brand/edit/${bran._id}`}
                          className="text-gray-700"
                        >
                          <BsPencilSquare />
                        </Link>
                        <Link
                          onClick={() => deletebrand(bran._id)}
                          className="text-red-500"
                        >
                          <FaRegTrashAlt />{" "}
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default ShowBrand;

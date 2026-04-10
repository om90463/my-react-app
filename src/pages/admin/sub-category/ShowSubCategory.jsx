import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/layouts/AdminLayout';
import { Link } from 'react-router-dom';
import axios from "../../../common/AdminAxios";
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";

const ShowSubCategory = () => {
  const [subCategory, setSubCategory] = useState([]);
  const getSubCatergories = async () => {
    try {
      const { message, success, data } = await axios.get("admin/sub-category/getAll");
      if (success) {
        setSubCategory(data);
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    }
  };
    const deleteSubCatergories = async (id) => {
      if(confirm("Are sure want to Delete")){
         try {
      const { message, success, data } = await axios.delete(`admin/sub-category/delete/${id}`);
      if (success) {
        toast.success(message);
        getSubCatergories();
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
    getSubCatergories();
  },[])
  return (
    <AdminLayout>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-gray-700 font-semibold text-xl my-4">Sub Categorys</h2>
        <Link
          to={`/admin/subcategory/create`}
          className="bg-gray-900 px-4 py-2 rounded text-white"
        >
          Create
        </Link>
      </div>
      <div className="w-full">
        <table className="border border-gray-300 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-3 py-2 text-left">Category</th>
              <th className="px-3 py-2 text-left">Name</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-center" width="100">Action</th>
            </tr>
          </thead>
          <tbody>
            {
                subCategory.length === 0 && <tr><td className="py-10 bg-white text-center text-gray-700 text-sm" colSpan={4}>SubCategory not found</td></tr>
            }
            {subCategory &&
              subCategory.map((subCat) => {
                return (
                  <tr key={subCat._id} className="border-gray-300 bg-white border-b ">
                    <td className="px-3 py-2 text-left">{subCat?.category?.name}</td>
                    <td className="px-3 py-2 text-left">{subCat.name}</td>
                    <td className="px-3 py-2 text-left">{subCat.status === 'active' && <p className="text-green-500">Active</p>}{subCat.status === 'block' && <p className="text-red-500">Block</p>}</td>
                    <td className="px-3 py-2"><div className="flex justify-center space-x-2"><Link to={`/admin/subcategory/edit/${subCat._id}`} className="text-gray-700"><BsPencilSquare/></Link><Link onClick={()=> deleteSubCatergories(subCat._id)} className="text-red-500"><FaRegTrashAlt/> </Link></div></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default ShowSubCategory

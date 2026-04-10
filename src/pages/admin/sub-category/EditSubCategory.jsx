import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/layouts/AdminLayout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import axios from "../../../common/AdminAxios";
import toast from 'react-hot-toast';

const EditSubCategory = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const updateSubCtegory = async (formData) => {
    setLoading(true)
    try {
      const { message, success, data } = await axios.put(
        `/admin/sub-category/update/${id}`,
        formData,
      );
      if (success) {
        toast.success(message);
        navigate("/admin/subcategory");
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    } finally{
        setLoading(false)
    }
  }
   const getSubCtegory = async () => {
    try {
      const { message, success, data } = await axios.get(
        `/admin/sub-category/show/${id}`,
      );
      if (success) {
        setSubCategory(data);
        reset({
          name: data?.name,
          category:data?.category,
          status : data?.status
        })
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    } 
  }
    const getCatergories = async () => {
    try {
      const { message, success, data } = await axios.get("/admin/category/getAll");
      if (success) {
        setCategory(data);
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    }
  };
  useEffect(()=>{
      getCatergories();
      getSubCtegory();
  },[])
  return (
     <AdminLayout>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-gray-700 font-semibold text-xl my-4">
          Edit Sub Categories
        </h2>
        <Link
          to={`/admin/subcategory`}
          className="bg-gray-900 px-4 py-2 rounded text-white"
        >
          Back
        </Link>
      </div>
      <div className="w-full">
        <div className="shadow-lg bg-white px-5 py-5 rounded-md">
          <form className="space-y-4" onSubmit={handleSubmit(updateSubCtegory)}>
             <div className="flex flex-col">
              <label htmlFor="" className="text-sm text-gray-900 mb-2">
                Category Name
              </label>
              <select
                {...register("category", {
                  required: "Category field is required",
                })}
                className="border border-gray-200 px-3 py-2 rounded"
              >
                <option value=''>Select Category</option>
                {
                    category && category.map((cat)=>{
                        return (
                            <option key={`${cat._id}`} value={`${cat._id}`}>{cat.name}</option>
                        )
                    })
                }
                
              </select>
              {errors?.status && (
                <p className="text-red-500">{errors?.status?.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm text-gray-900 mb-2">
                Name
              </label>
              <input
                {...register("name", { required: "Name field is required" })}
                className="border border-gray-200 px-3 py-2 rounded"
                type="text"
                placeholder="Enter Name"
              />
              {errors?.name && (
                <p className="text-red-500">{errors?.name?.message}</p>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm text-gray-900 mb-2">
                Status
              </label>
              <select
                {...register("status", {
                  required: "status field is required",
                })}
                name="status"
                className="border border-gray-200 px-3 py-2 rounded"
              >
                <option value="active">Active</option>
                <option value="block">Block</option>
              </select>
              {errors?.status && (
                <p className="text-red-500">{errors?.status?.message}</p>
              )}
            </div>
            <button
              disabled={loading}
              className="bg-gray-900 px-4 py-2 rounded text-white mt-3 cursor-pointer"
            >
              {loading ? "Please wait ..." : "Update"}
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  )
}

export default EditSubCategory

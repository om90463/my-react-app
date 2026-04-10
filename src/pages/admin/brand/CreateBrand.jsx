import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../common/AdminAxios";
import toast from "react-hot-toast";
import AdminLayout from "../../../components/layouts/AdminLayout";

const CreateBrand = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const createBrand = async (formData) => {
    setLoading(true);
    try {
      const { message, success, data } = await axios.post(
        "/admin/brand/create",
        formData,
      );
      if (success) {
        toast.success(message);
        navigate("/admin/brand");
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <AdminLayout>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-gray-700 font-semibold text-xl my-4">
          Create Brand
        </h2>
        <Link
          to={`/admin/brand`}
          className="bg-gray-900 px-4 py-2 rounded text-white"
        >
          Back
        </Link>
      </div>
      <div className="w-full">
        <div className="shadow-lg bg-white px-5 py-5 rounded-md">
          <form className="space-y-4" onSubmit={handleSubmit(createBrand)}>
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
              {loading ? "Please wait ..." : "Create"}
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CreateBrand;

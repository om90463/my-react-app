import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import axios from "../../common/AdminAxios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { AdminAuthContext } from "../../context/AdminAuth";

const AdminLogin = () => {
  const navigate =  useNavigate();
  const {login} = useContext(AdminAuthContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    try {
        const {message, success, data} =  await axios.post('/admin/auth/login', formData);
        if (success) {
            const adminInfo = {
                token : data?.token
            }
            login(adminInfo);
            localStorage.setItem('xecomm-admin-info', JSON.stringify(adminInfo))
           navigate('/admin/dashboard');
        }
    } catch (error) {
        if(error.status === 400){
            toast.error(error?.response?.data?.message)
        }else {
            console.log(error.message || "somthing went wrong")
        }
    }
  };
  return (
    <div className="bg-gray-200 min-h-screen lg:px-8 px-5 w-full flex justify-center items-center py-30 mb-10">
      {/* Login Form */}
      <div className="max-w-md w-full shadow-md rounded-md px-8 py-7 bg-white">
        <h1 className="text-gray-800 text-2xl font-bold mb-3">Admin Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" action="">
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-sm text-gray-800">
              Email
            </label>
            <input
              {...register("email", {
                required: "The email field is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="text"
              name="email"
              placeholder="Enter Email"
              className="px-3 py-2 border border-gray-200 shadow rounded-md"
            />
            {errors?.email && (
              <p className="text-red-500">{errors?.email?.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="" className="text-sm text-gray-800">
              Password
            </label>
            <input
              {...register("password", {
                required: "The password field is required",
              })}
              type="password"
              name="password"
              placeholder="Enter Password"
              className="px-3 py-2 border border-gray-200 shadow rounded-md"
            />
            {errors?.password && (
              <p className="text-red-500">{errors?.password?.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-2 pt-3">
            <button className="bg-gray-900 px-5 py-2 rounded-md w-full text-center text-white  hover:bg-gray-700">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

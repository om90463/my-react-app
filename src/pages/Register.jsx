import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Layout from "../components/layouts/Layout";
import { useForm } from "react-hook-form";
import axios from "../common/UserAxios";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const {
      register,
      handleSubmit,
      formState: { errors },
      watch
    } = useForm();
  const password = watch('password');
  const [loading, setLoading] = useState(false)
  const registerUser = async (formData) => {
    console.log(formData)
    setLoading(true)
    try {
      const {success, data, message} = await axios.post('/auth/register', formData);
      if (success) {
        toast.success(message);
        navigate('/login')
      }
    } catch (error) {
      if(error.status === 400){
            toast.error(error?.response?.data?.message)
        }else {
            console.log(error.message || "somthing went wrong")
      }
    }finally {
      setLoading(false)
    }
  }  
  return (
    <Layout>
      <div className="bg-gray-200 lg:px-8 px-5 w-full flex justify-center items-center py-30 mb-10">
        {/* Login Form */}
        <div className="max-w-md w-full shadow-md rounded-md px-8 py-7 bg-white">
          <h1 className="text-gray-800 text-2xl font-bold text-center">
            Register
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit(registerUser)}>
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-sm text-gray-800">
                Name
              </label>
              <input
                type="text"
                {
                  ...register('name', {required:"The name field is required"})
                }
                name="name"
                placeholder="Enter Name"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
              {
                errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>
              }
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-sm text-gray-800">
                Email
              </label>
              <input
                type="text"
                {
                    ...register('email',{
                        required: "The email field is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                        } 
                    })
                }
                name="email"
                placeholder="Enter Email"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
              {
                errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>
              }
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-sm text-gray-800">
                Password
              </label>
              <input
                type="password"
                 {
                  ...register('password', {required:"The password field is required"})
                }
               
                placeholder="Enter Password"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
              {
                errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>
              }
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-sm text-gray-800">
                Confirm Password
              </label>
              <input
                type="password"
                {
                  ...register('confirm_password', {required:"The confirm  password field is required", validate:(value) => value === password || "The confirm password must be match with passowrd"})
                }
               
                placeholder="Enter Confirm Password"
                className="px-3 py-2 border border-gray-200 shadow rounded-md"
              />
              {
                errors.confirm_password && <p className="text-red-500 text-sm">{errors.confirm_password.message}</p>
              }
            </div>
            <div className="flex flex-col space-y-2 pt-3">
              <button disabled={loading} className="bg-green-400 px-5 py-2 rounded-md w-full text-center text-gray-800  hover:bg-gray-900 hover:text-white">
               {
                !loading ? " Register" : "Please wait..."
               }
              </button>
            </div>
            <div className="text-center text-sm text-gray-800">
              Already have an account?{" "}
              <Link to={'/login'} className="hover:underline">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;

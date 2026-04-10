import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/layouts/AdminLayout'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaTrashAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import axios from "../../../common/AdminAxios";

const EditPorduct = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [product, setProduct] = useState([]);
  const sizes = ["XS", "S", "M", "L", "XL"];

  const { id } = useParams();

  const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      setValue
    } = useForm();
  const updateProduct = async (frmData) => {
    setLoading(true)
    const formData = new FormData();
    formData.append("name", frmData.name);
    formData.append("category", frmData.category);
    formData.append("sub_category", frmData.sub_category);
    formData.append("brand", frmData.brand);
    formData.append("is_featured", frmData.is_featured);
    formData.append("description", frmData.description);
    formData.append("price", frmData.price);
    formData.append("qty", frmData.qty);
    formData.append("discount_price", frmData.discount_price);
    formData.append("sku", frmData.sku);
    formData.append("status", frmData.status);
    formData.append("sizes", frmData.sizes);
  

    try {
      const { message, success, data } = await axios.put(
        `admin/product/update/${id}`,
        formData,
      );
      if (success) {
        toast.success(message);
        navigate("/admin/product");
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
  const getCatergories = async () => {
    try {
      const { message, success, data } = await axios.get("admin/category/getAll");
      if (success) {
        setCategories(data);
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    }
  };
   const getSubCatergories = async (category_id, selectedSubCategory = null) => {
    try {
      const { message, success, data } = await axios.get(`admin/sub-category/getAll?category_id=${category_id}`);
      if (success) {
        setSubCategories(data);
        if (selectedSubCategory) {
          setValue("sub_category", selectedSubCategory);
        }
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    }
  };
   const getBrands = async () => {
    try {
      const { message, success, data } = await axios.get("/admin/brand/getAll");
      if (success) {
        setBrands(data);
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    }
  };
  const handleFile = async (e)=> {
    try {
      const formData = new FormData();
      formData.append('image', e.target.files[0]);
      const { message, success, data } = await axios.put(`/admin/product/update-gallary/${id}`, formData);
      if (success) {
        setProduct(data);
      }
      
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    }
    e.target.value  = "";
  }
  const handleDelete = async (public_id) => {
    try {
      const confirmDelete = confirm("Are you sure want to delete ")
      if (!confirmDelete) {
        return;
      }
      const { message, success, data } = await axios.delete(`/admin/product/delete-image/${id}/${public_id}`);
      if (success) {
        setProduct(data);
        toast.success(message);
        navigate("/admin/product");
      }
    } catch (error) {
      if (error.status === 400) {
        toast.error(error?.response?.data?.message);
      } else {
        console.log(error.message || "somthing went wrong");
      }
    }
  }
   const getProduct = async () => {
    try {
      const { message, success, data } = await axios.get(
        `/admin/product/get/${id}`,
      );
      setProduct(data);
      
      if (success) {
        reset({
          name:data?.name,
          description:data?.description,
          category:data?.category,
          sub_category:data?.subCategory,
          brand:data?.brand,
          is_featured: data?.isFeatured,
          price: data?.price,
          discount_price: data?.discountPrice,
          qty: data?.qty,
          sku: data?.sku,
          status : data?.status,
          sizes : data?.sizes
        })
        getSubCatergories(data?.category)
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
      getBrands();
      getProduct();
    },[])
  return (
     <AdminLayout>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-gray-700 font-semibold text-xl my-4">
          Edit Product
        </h2>
        <Link
          to={`/admin/product`}
          className="bg-gray-900 px-4 py-2 rounded text-white"
        >
          Back
        </Link>
      </div>
      <form  onSubmit={handleSubmit(updateProduct)}>
      <div className="grid grid-cols-12 gap-4">
        <div className='md:col-span-9 col-span-12 space-y-4'>
           <div className="shadow-lg bg-white px-5 py-5 rounded-md">
          <div className="space-y-4">
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
                Description
              </label>
              <textarea
                {...register("description", { required: "Description field is required" })}
                className="border border-gray-200 px-3 py-2 rounded"
                type="text"
                rows={5}
                placeholder="Enter Description"
              />
              {errors?.description && (
                <p className="text-red-500">{errors?.description?.message}</p>
              )}
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                   <div className="flex flex-col">
                      <label htmlFor="" className="text-sm text-gray-900 mb-2">
                      Price
                    </label>
                    <input
                      {...register("price", { required: "The Price field is required" })}
                      className="border border-gray-200 px-3 py-2 rounded"
                      type="number"
                      placeholder="Enter Price"
                    />
                     {errors?.price && (
                        <p className="text-red-500">{errors?.price?.message}</p>
                      )}
                    </div>
              
              </div>
              <div className='col-span-6'>
                  <div className="flex flex-col">
                      <label htmlFor="" className="text-sm text-gray-900 mb-2">
                     Discounted Price
                    </label>
                    <input
                      {...register("discount_price")}
                      className="border border-gray-200 px-3 py-2 rounded"
                      type="number"
                      placeholder="Enter Discount Price"
                    />
                    </div>
              </div>
            </div>
             <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-6'>
                   <div className="flex flex-col">
                      <label htmlFor="" className="text-sm text-gray-900 mb-2">
                      Qty
                    </label>
                    <input
                      {...register("qty", { required: "The Qty field is required" })}
                      className="border border-gray-200 px-3 py-2 rounded"
                      type="number"
                      placeholder="Enter Qty"
                    />
                     {errors?.qty && (
                        <p className="text-red-500">{errors?.qty?.message}</p>
                      )}
                    </div>
              
              </div>
              <div className='col-span-6'>
                  <div className="flex flex-col">
                      <label htmlFor="" className="text-sm text-gray-900 mb-2">
                     Sku
                    </label>
                    <input
                      {...register("sku", { required: "The SKU field is required" })}
                      className="border border-gray-200 px-3 py-2 rounded"
                      type="text"
                      placeholder="Enter SKU"
                    />
                     {errors?.sku && (
                        <p className="text-red-500">{errors?.sku?.message}</p>
                      )}
                    </div>
              </div>
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
            <div className="flex flex-col">
              <label  className="text-sm text-gray-900 mb-2">
                Sizes
              </label>
              <div className='flex items-center space-x-3'>
              {
                sizes && sizes.map((size, index)=> { 
                  return (
                  <label key={index} className='flex space-x-2'>
                    <input type='checkbox' value={size} {...register('sizes')} />
                    <span>{size}</span>
                  </label>)
                })
              }
              </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg bg-white px-5 py-5 rounded-md">
          <h2 className='text-lg font-bold mb-4'>Product Gallary</h2>
          <input type="file" onChange={handleFile} />
          <div className='grid grid-cols-5 gap-2 mt-3'>
              {
               product && product?.gallary?.map((image, index)=>(
                  <div key={index} className='bg-gray-100 h-64 rounded-lg flex justify-center items-center overflow-clip relative'>
                    <img src={image.url} alt="" />
                    <Link onClick={()=>handleDelete(image?.publicId)} className='absolute text-red-500 right-1.5 cursor-pointer'><FaTrashAlt/></Link>
                  </div>
                ))
              }
          </div>
        </div>
        </div>
        <div className='col-span-3 space-y-4'>
           <div className="shadow-lg bg-white px-5 py-5 rounded-md">
              <h2 className='text-lg font-bold mb-4'>Product Category</h2>
              <div className='space-y-4'>
                   <div>
                     <label htmlFor="" className="text-sm text-gray-900 mb-3 inline-block">
                Category
              </label>
                <select 
                 {...register("category", {
                  required: "Category field is required",
                })}
                onChange={(e)=> getSubCatergories(e.target.value)} className="border w-full border-gray-200 px-3 py-2 rounded">
                  <option value="">Select a Category</option>
                  {
                    categories && categories.map((category) => {
                      return (<option key={category._id} value={category._id}>{category.name}</option>)
                    })
                  }
                </select>
                {errors?.category && (
                <p className="text-red-500">{errors?.category?.message}</p>
              )}
              </div>
               <div>
                  <label htmlFor="" className="text-sm text-gray-900 mb-3 inline-block">
                  Sub Category
                  </label>
                <select 
                 {...register("sub_category")}
                className="border w-full border-gray-200 px-3 py-2 rounded">
                  <option value="">Select a Sub Category</option>
                  {
                    subCategories && subCategories.map((subcategory)=>{
                      return(<option key={subcategory._id} value={subcategory._id}>{subcategory.name}</option>)
                    })
                  }
                </select>
              </div>
              </div>
             
          </div>
            <div className="shadow-lg bg-white px-5 py-5 rounded-md">
             <h2 className='text-lg font-bold mb-2'>Product Brand</h2>
              <div>
                  <label htmlFor="" className="text-sm text-gray-900 mb-3 inline-block">
                  Brand
                  </label>
                <select {...register("brand")} className="border w-full border-gray-200 px-3 py-2 rounded">
                  <option value="">Select a Brand</option>
                  {
                    brands && brands.map((brand)=>{
                      return(<option key={brand._id} value={brand._id}>{brand.name}</option>)
                    })
                  }
                </select>
              </div>
          </div>
            <div className="shadow-lg bg-white px-5 py-5 rounded-md">
              <h2 className='text-lg font-bold mb-2'>Featured Product</h2>
              <div>
                <select {...register("is_featured")} className="border w-full border-gray-200 px-3 py-2 rounded">
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>
          </div>
        </div>
      </div>
       <button disabled={loading} className="bg-gray-900 mt-4 px-4 py-2 rounded text-white cursor-pointer">
              {loading ? "Please wait ..." : "Update"}
            </button>
     </form>
    </AdminLayout>
  )
}

export default EditPorduct

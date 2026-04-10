import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/layouts/AdminLayout';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';
import { BsPencilSquare } from 'react-icons/bs';
import toast from 'react-hot-toast';
import axios from "../../../common/AdminAxios";

const ShowProduct = () => {
    const [products, setProducts] = useState([]);
    const getProducts = async () => {
        try {
        const { message, success, data } = await axios.get("admin/product/getAll");
        if (success) {
            setProducts(data);
        }
        } catch (error) {
        if (error.status === 400) {
            toast.error(error?.response?.data?.message);
        } else {
            console.log(error.message || "somthing went wrong");
        }
        }
    };
    const deleteProduct = async (id) => {
      if(confirm("Are you sure want to delete")){
         try {
      const { message, success, data } = await axios.delete(`admin/product/delete/${id}`);
      if (success) {
        toast.success(message);
        getProducts();
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
    getProducts();
  },[])
  return (
    <AdminLayout>
      <div className="flex justify-between py-5 items-center">
        <h2 className="text-gray-700 font-semibold text-xl my-4">Products</h2>
        <Link
          to={`/admin/product/create`}
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
              <th className="px-3 py-2 text-left">Category</th>
              <th className="px-3 py-2 text-left">Price</th>
              <th className="px-3 py-2 text-left">Qty</th>
              <th className="px-3 py-2 text-left">Featured</th>
              <th className="px-3 py-2 text-left">Status</th>
              <th className="px-3 py-2 text-center" width="100">Action</th>
            </tr>
          </thead>
          <tbody>
             {
                products.length === 0 && <tr><td className="py-10 bg-white text-center text-gray-700 text-sm" colSpan={7}>Products not found</td></tr>
            }
            {products &&
              products.map((product) => {
                return (
                  <tr key={product._id} className="border-gray-300 bg-white border-b ">
                    <td className="px-3 py-2 text-left">
                     <div className='flex items-center'>
                     
                      {
                        product?.gallary?.length > 0 && <img className='w-10 rounded-md me-3' src={product?.gallary[0]?.url} alt="" />
                      }
                      {
                        product?.gallary?.length === 0 && <img className='w-10 rounded-md me-3' src={`https://placehold.co/400x600`} alt="" />
                      }
                       {product.name}
                     </div>
                    </td>
                     <td className="px-3 py-2 text-left">{product.category.name}</td>
                      <td className="px-3 py-2 text-left">{product.price}</td>
                      <td className="px-3 py-2 text-left">{product.qty}</td>
                      <td className="px-3 py-2 text-left">{product.isFeatured}</td>
                    <td className="px-3 py-2 text-left">{product.status === 'active' && <p className="text-green-500">Active</p>}{product.status === 'block' && <p className="text-red-500">Block</p>}</td>
                    <td className="px-3 py-2"><div className="flex justify-center space-x-2"><Link to={`/admin/product/edit/${product._id}`} className="text-gray-700"><BsPencilSquare/></Link><Link onClick={()=> deleteProduct(product._id)} className="text-red-500"><FaRegTrashAlt/> </Link></div></td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  )
}

export default ShowProduct

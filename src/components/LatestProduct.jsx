import React, { useEffect, useState } from 'react';
import ProductImg1 from "../assets/product1.png";
import ProductImg2 from "../assets/product2.jpg";
import axios from '../common/UserAxios';
import { Link } from 'react-router-dom';

const LatestProduct = () => {
    const [products, setProducts] = useState([]);
    const latestProduct = async () => {
      try {
        const {message, success, data} = await axios.get('/home/latest-product');
        if (success) {
          setProducts(data);
        }
      } catch (error) {
        console.error(error?.message || "something went wrong")
      }
    }
    useEffect(()=>{
      latestProduct();
    },[])
  return (
     <div className='max-w-360 mx-auto lg:px-8 px-5 py-10'>
      <h2 className='text-green-400 text-4xl font-medium pb-10'>Latest <span className='text-gray-700'>Product</span> </h2>
      <div className='space-y-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5'>
          {products && products.map((product) => {
            return( <Link to={`/product/${product._id}`} key={product._id}>
           <div className='bg-slate-100 overflow-hidden rounded-lg'>
            {
                product?.gallary?.length > 0 && <img className='object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110' src={product?.gallary[0]?.url} alt="" />
            }
            {
              product?.gallary?.length === 0 && <img className='object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110' src={`https://placehold.co/400x600`} alt="" />
            }
             {/* <img className='object-cover h-95 duration-500 ease-in-out transition-transform hover:scale-110' src={product?.gallary[0]?.url} alt="" /> */}
          </div>
          <div>
            <h3 className='text-lg text-gray-800 font-semibold'>{ product.name}</h3>
            <p className='text-base text-gray-700 font-semibold'>{product.discountPrice} <span className='line-through text-gray-500'>{product.price}</span></p>
          </div>
         </Link>);
          })}
        
        </div>
        
      </div>
    </div>
  )
}

export default LatestProduct

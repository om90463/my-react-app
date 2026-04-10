import React, { useEffect, useState } from 'react'
import Layout from '../components/layouts/Layout';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import Image1 from '../assets/product3.png';
import Image2 from '../assets/product2.jpg';
import Image3 from '../assets/product1.png';
import axios from '../common/UserAxios';

const Product = () => {
  const [product, setProduct] = useState({});
  const [ gallary, setGallary] = useState([]);
  const { id } = useParams();

  const [mainImage, setMainImage] = useState(null);
  const handleGalary = (item)=>{
      setMainImage(item);
  }
  const getProduct = async () => {
    try {
      const {success, message, data} = await axios.get(`/home/get-product/${id}`);
      if (success) {
        setProduct(data);
        setGallary(data.gallary)
      }
    } catch (error) {
      console.error(error?.message || "something went wrong");
    }
  }
  useEffect(()=>{
    getProduct();
  },[])
  useEffect(()=>{
      if(gallary){
        setMainImage(gallary[0]);
      }
  },[product]);
  return (
    <Layout>
      {/* Bredcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex items-center gap-x-1 text-sm">
          <Link>Shop</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Good Product for men</Link>
        </div>
      </div>

      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="grid grid-cols-12 gap-5">
            <div className='lg:col-span-5 col-span-12'>
              {/* gallary */}
              <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-10'>
                  <img src={mainImage?.url} className='w-full rounded-md' alt="" />
                </div>
                <div className='col-span-2'>
                  {
                    gallary && gallary.map((item)=>{
                      return(
                        <Link className='flex mb-2 bg-gray-100 border border-gray-100 rounded-md' key={item._id}>
                        <img  src={item.url} onClick={()=> handleGalary(item)} className='w-full bg-slate-50' alt='' />
                        </Link>
                      )
                    })
                  }
                </div>
              </div>
            </div>
            <div className='lg:col-span-7 col-span-12'>
                  <h2 className='font-bold text-2xl text-gray-800'>{product?.name}</h2>
                  {
                    product.discountPrice > 0 && 
                    <div className='font-bold text-lg mt-3'>${product.discountPrice} <span className='line-through text-gray-500 font-normal'>${product.price}</span></div>
                  }
                 
                  <div className='text-base text-gray-500 mt-3'>{product.description}</div>
                  <div className='font-bold text-lg mt-3'>Select Size</div>
                  <div className='flex gap-x-2'>
                    {
                      product.sizes && product.sizes.lenth > 0 &&  product.sizes.map((size, index)=>{
                        return (
                           <div key={index} className='bg-gray-100 hover:bg-gray-800 hover:text-white cursor-pointer rounded-md w-10 h-10 text-center flex justify-center items-center'>{size}</div>
                        )
                      })
                     
                    }
                  </div>
                  <div className='mt-8 border-b border-gray-200 pb-10'>
                    <Link className='bg-green-400 px-5 py-3 rounded-md text-gray-800'>Add to Cart</Link>
                  </div>
                  <div className='flex flex-col text-gray-500 mt-5'>
                    <p>100% Cotton</p>
                    <p>Money Back Guarantee</p>
                    <p>Cash on delivery is available on this product.</p>
                  </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product

import React from 'react';
import Layout from '../components/layouts/Layout';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import ProductImg1 from '../assets/product1.png';

const Cart = () => {
  return (
    <Layout>
        {/* Bredcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex items-center gap-x-1 text-sm">
          <Link>Home</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Cart</Link>
        </div>
      </div>
      {/* Title */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto">
        <div className="flex text-4xl text-green-400">Cart</div>
      </div>
       <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className='grid grid-cols-12 gap-5'>
          <div className='lg:col-span-9 col-span-12'>
            {/* cart items */}
            <table className='w-full'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-2 py-3 text-left'>Product</th>
                    <th className='px-2 py-3 text-center'>Qty</th>
                    <th className='px-2 py-3 text-center'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='py-3 text-left'>
                      <div className='flex gap-4'>
                        <div className='bg-slate-50 p-2 rounded-md'>
                          <img src={ProductImg1} className='w-15' alt="" />
                        </div>
                        <div className='flex flex-col'>
                          <h2 className='text-gray-800 font-semibold'>Nice White Jacket for Woman</h2> 
                          <div className='flex gap-3 items-center pt-3'>
                            <div className='text-gray-500 font-semibold'>$100</div>
                            <div className='bg-gray-300 flex justify-center items-center px-2 py-1 rounded-md'>
                              XL
                            </div>
                          </div>
                          <Link className='text-red-400 text-sm mt-3'>Remove</Link>
                        </div>
                      </div>
                    </td>
                    <td className='px-2 py-3 text-center align-top'>
                      <div className='flex w-25 rounded-md mx-auto items-center justify-center px-2 py-2 border border-gray-200'>
                        <div className='w-5'>-</div>
                        <div className='w-10'>1</div>
                        <div className='w-5'>+</div>
                      </div>
                    </td>
                    <td className='px-2 py-3 text-center'>$100</td>
                  </tr>
                </tbody>
            </table>
          </div>
          <div className='lg:col-span-3 col-span-12'>
            <div className='bg-gray-50 rounded-md px-5 py-3'>
              <h2 className='font-semibold text-gray-800 border-b border-gray-200 pb-3 mb-3'>Summary</h2>
              <div className='flex justify-between'>
                  <div className='text-gray-800'>Subtotal</div>
                  <div  className='text-gray-800'>$300</div>
              </div>
              <div className='flex pt-3'>
                <Link to={'/checkout'} className='bg-green-400 px-5 ms-3 py-2.5 rounded-md w-full text-center text-gray-800 hover:bg-gray-900 hover:text-white'>Proceed To Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Cart

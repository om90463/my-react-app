import React from 'react';
import Layout from '../components/layouts/Layout';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import ProductImg1 from '../assets/product1.png';

const Checkout = () => {
  return (
    <Layout>
    {/* Bredcrumb */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto py-5">
        <div className="flex items-center gap-x-1 text-sm">
          <Link>Home</Link>
          <IoIosArrowForward />
          <Link className="font-bold">Checkout</Link>
        </div>
      </div>
      {/* Title */}
      <div className="max-w-360 lg:px-8 px-5 mx-auto pb-5">
        <div className="flex text-4xl text-green-400">Checkout</div>
      </div>
      {/* Main Container */}
       <div className="max-w-360 lg:px-8 px-5 mx-auto pb-5">
          <div className='grid grid-cols-12 gap-5'>
            {/* Billing form */}
            <div className='lg:col-span-8 col-span-12'>
              <div className='shadow-lg rounded-md px-5 py-4 border border-gray-100'>
                 <h2 className='text-2xl text-gray-800 font-semibold pb-3 border-b border-gray-200 mb-3'>Billing Details</h2>
                <form className='space-y-3' action="">
                  <div>
                    <input type="text" placeholder='Enter Full Name' className='border w-full border-gray-200 px-3 py-3 rounded-md' />
                  </div>
                  <div className='grid grid-cols-2 gap-3'>
                    <div>
                         <input type="text" placeholder='Enter Email' className='border w-full border-gray-200 px-3 py-3 rounded-md' />
                    </div>
                   <div>
                    <input type="text" placeholder='Enter Phone No' className='border w-full border-gray-200 px-3 py-3 rounded-md' />
                   </div>
                    
                  </div>
                  <div>
                    <textarea placeholder='Enter Address' rows={3} className='border w-full border-gray-200 px-3 py-3 rounded-md'></textarea> 
                  </div>
                   <div className='grid grid-cols-2 gap-3'>
                    <div>
                         <input type="text" placeholder='Enter City' className='border w-full border-gray-200 px-3 py-3 rounded-md' />
                    </div>
                   <div>
                    <input type="text" placeholder='Enter State' className='border w-full border-gray-200 px-3 py-3 rounded-md' />
                   </div>
                    
                  </div>
                   <div>
                    <input type="text" placeholder='Enter Zip code' className='border w-full border-gray-200 px-3 py-3 rounded-md' />
                  </div>
                </form>
              </div>
            </div>
            {/* checkour summary */}
            <div className='lg:col-span-4 col-span-12'>
              <div className='bg-gray-50 rounded-md p-5 shadow-md'>
                 <h2 className='text-2xl text-gray-800 font-semibold pb-3 border-b border-gray-200 mb-3'>Order Summary</h2>
                 <div className='grid grid-cols-12 gap-5 mb-3'>
                  <div className='col-span-2'>
                    <img src={ProductImg1} className='w-ful rounded-md bg-slate-50' alt="" />
                  </div>
                  <div className='col-span-8'>
                    <h3 className='text-gray-700 text-sm font-semibold'>Nice White Jacket for Women</h3>
                    <div className='flex space-x-5 text-sm'>
                      <div className='text-gray-600'>Size: <span className='text-gray-800'>L</span></div>
                      <div className='text-gray-600'>Qty: <span className='text-gray-800'>3</span></div>
                    </div>
                  </div>
                  <div className='col-span-2 text-sm font-semibold text-right'>$100</div>
                 </div>
                  <div className='grid grid-cols-12 gap-5 mb-3'>
                  <div className='col-span-2'>
                    <img src={ProductImg1} className='w-ful rounded-md bg-slate-50' alt="" />
                  </div>
                  <div className='col-span-8'>
                    <h3 className='text-gray-700 text-sm font-semibold'>Nice White Jacket for Women</h3>
                    <div className='flex space-x-5 text-sm'>
                      <div className='text-gray-600'>Size: <span className='text-gray-800'>L</span></div>
                      <div className='text-gray-600'>Qty: <span className='text-gray-800'>3</span></div>
                    </div>
                  </div>
                  <div className='col-span-2 text-sm font-semibold text-right'>$100</div>
                 </div>
                 <div className='flex text-sm py-3 text-gray-500 justify-between font-semibold'>
                  <div>Subtotal:</div>
                  <div>$200</div>
                 </div>
                 <div className='flex text-sm border-b border-gray-200 pb-5 text-gray-900 justify-between font-semibold'>
                  <div>Total:</div>
                  <div>$200</div>
                 </div>
                 <div className='text-lg text-gray-900 font-bold mt-5'>Payment Method</div>
                 <div className='flex mb-5 items-center text-sm text-gray-800 space-x-5 mt-3'>
                  <div className='space-x-2 flex items-center'> <input type="radio" checked /> <span>COD</span> </div>
                  <div className='space-x-2 flex items-center'><input type="radio" /> <span>Stripe</span> </div>
                 </div>
                 <button className='bg-green-400 px-5 p-y-2.5 rounded-md w-full text-center text-gray-800 hover:bg-slate-900 hover:text-white'>Place Order Securely</button>
                 <div className='text-gray-400 text-sm text-center'>Secure payment & encrypted checkout</div>
                 
              </div>
            </div>
          </div>
      </div>
    </Layout>
  )
}

export default Checkout

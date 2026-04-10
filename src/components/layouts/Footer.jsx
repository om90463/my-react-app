import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='max-w-360 mx-auto lg:px-8 px-5'>
      <div className='grid grid-cols-1 gap-y-5 bg-green-300 lg:grid-cols-3 rounded-lg p-10'>
        <div className='lg:pr-20'>
           <Link>
            <span className='text-3xl text-white font-bold'>X</span>
            <span className='text-3xl text-slate-800 font-bold'>ECOMM</span>
          </Link>
          <p className='text-gray-800 mt-2'>Your destination for everyday fashion essentials.</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl text-gray-800 font-bold mb-3'>Quick Links</h1>
          <Link className='hover:underline'>Login</Link>
          <Link className='hover:underline'>Registration</Link>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-xl text-gray-800 font-bold mb-3'>Contact</h1>
          <Link className='hover:underline'>+91-999XXXXX00</Link>
          <Link  to={'dummy@example.com'} className='hover:underline'>dummy@example.com</Link>
          <p>Dummy Address 123</p>
        </div>
      </div>
      <div className='text-sm text-center'>
        &copy; All Rights Reserved 2026
      </div>
    </div>
  )
}

export default Footer

import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../assets/banner.jpg'

const Hero = () => {
  return (
    <div className='bg-slate-50'>
      <div className='max-w-360 mx-auto lg:px-8 px-5 items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 py-10 sm:py-20'>
            {/* left box */}
            <div className='space-y-7 py-10 pr-0 sm:pr-20'>
                <h1 className='lg:text-5xl text-3xl text-gray-700 font-bold sm:leading-14'>Discover Your Style With Our Collection</h1>
                <p className='text-lg text-gray-800'>Explore the cureted selection premium product to desighed to evlute your lifestyle. Quelity meets style in every peser </p>
                <Link className='bg-green-500 px-8 py-3  text-md rounded-md text-gray-800'>
                Shop Now
                </Link>
            </div>
            {/* right box */}
            <div className='relative pb-10'>
                <img className='rounded-2xl object-cover h-75 sm:h-125 relative w-full' src={Banner} alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

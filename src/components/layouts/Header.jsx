import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IoCartOutline } from "react-icons/io5";
import axios from '../../common/UserAxios';
import { AuthContext } from '../../context/Auth';

function Header() {
 const [categories, setCategories] = useState([]);
 const {isUserLoggedIn} = useContext(AuthContext);
    const getCategory = async () => {
      try {
        const {message, success, data} = await axios.get('/home/get-category');
        if (success) {
          setCategories(data);
        }
      } catch (error) {
        console.error(error?.message || "something went wrong")
      }
    }
    useEffect(()=>{
      getCategory();
    },[])

  return (
    <header className='shadow'>
      <div className='bg-green-200'>
        <div className='text-sm max-w-360 mx-auto py-1 lg:px-8 px-5'>
          Free Delivery on Your First Order
        </div>
      </div>
      <div className='max-w-360 mx-auto lg:py-6 py-3 lg:px-8 px-5 flex justify-between items-center'>
        <Link to={'/'}>
          <span className='text-3xl text-green-500 font-bold'>X</span>
          <span className='text-3xl text-slate-800 font-bold'>ECOMM</span>
        </Link>
        <nav className='text-lg hidden text-gray-800 space-x-5 sm:flex items-center'>
          <Link className='hover:text-green-500' to={"/"}>Home</Link>
          {
            categories && categories.map((category)=> {
              return ( <Link key={category._id} className='hover:text-green-500' to={`/shop/${category._id}`}>{category.name}</Link>)
            })
          }
          <Link to={'/cart'} className='relative'>
          <span className='bg-red-400 text-sm rounded-[50%] flex justify-center items-center text-white absolute left-2 w-6 h-6 -top-5.5'>0</span>
           <IoCartOutline className='mt-1'/>
          </Link>
          {
            !isUserLoggedIn() && <Link to={'/login'} className='bg-green-400 px-5 ms-3 py-2 rounded-md text-gray-800  hover:bg-gray-900 hover:text-white'>Login</Link>
          }
           {
            isUserLoggedIn() && <Link to={'/account/profile'} className='bg-green-400 px-5 ms-3 py-2 rounded-md text-gray-800  hover:bg-gray-900 hover:text-white'>Profile</Link>
          }
        </nav>
        
      </div>
    </header>
  )
}

export default Header

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { IoLogOutSharp } from "react-icons/io5";
import { AuthContext } from '../../context/Auth';

const SideBar = () => {
  const {logout} = useContext(AuthContext)
  return (
    <div className='space-y-1'>
        <Link className='flex bg-green-300 text-gray-900 rounded-md px-4 py-2 w-full items-center font-semibold hover:bg-gray-900 hover:text-white' to={'/account/profile'}> <FaUser className='me-2' /> Profile</Link>
        <Link className='flex bg-green-300 text-gray-900 rounded-md px-4 py-2 w-full items-center font-semibold  hover:bg-gray-900 hover:text-white' to={'/account/orders'}><FaCartShopping className='me-2' /> Orders</Link>
        <Link className='flex bg-green-300 text-gray-900 rounded-md px-4 py-2 w-full items-center font-semibold  hover:bg-gray-900 hover:text-white' to={'/account/change-password'}><FaLock className='me-2' /> Change Password</Link>
        <Link className='flex bg-green-300 text-gray-900 rounded-md px-4 py-2 w-full items-center font-semibold  hover:bg-gray-900 hover:text-white' onClick={()=>logout()}><IoLogOutSharp size={20} className='me-2'/>LogOut</Link>
    </div>
  )
}

export default SideBar

import React, { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuth'
import { Navigate } from 'react-router-dom';

const RequireAdminAuth = ({children}) => {
    const { admin } = useContext(AdminAuthContext);
    if (!admin) {
      return  <Navigate to={'/admin/login'} />
    }
  return children;
}

export default RequireAdminAuth

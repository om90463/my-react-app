import React, { useContext } from 'react'
import { AdminAuthContext } from '../context/AdminAuth'
import { Navigate } from 'react-router-dom';

const AdminGeust = ({children}) => {
    const {isAdminLoggedIn} = useContext(AdminAuthContext);
    if(isAdminLoggedIn()){
        return <Navigate to={'/admin/dashboard'} />
    }
  return children
}

export default AdminGeust

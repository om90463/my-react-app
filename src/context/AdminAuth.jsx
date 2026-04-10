import { createContext, useContext, useState } from "react";
import { adminToken } from "../common/Config";

export const AdminAuthContext = createContext();
export const AdminAuthProvider = ({children}) => {
    const token = adminToken();
    const [admin, setAdmin] = useState(token);
    const login = (admin)=> {
        setAdmin(admin);
    }
    const logout = ()=> {
        setAdmin(null);
        localStorage.removeItem('xecomm-admin-info');
    }
    const isAdminLoggedIn = () => {
       return admin ? true : false
    }
    return(
        <AdminAuthContext.Provider value={ {admin, login, logout, isAdminLoggedIn }}>
            {children}
        </AdminAuthContext.Provider>
    )
}
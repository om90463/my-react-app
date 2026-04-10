import { createContext, useState } from "react";
import { userToken } from "../common/Config";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const token = userToken();
    const [user, setUser] = useState(token)
    const login = (user)=>{
        setUser(user)
    }
    const logout =()=>{
        setUser(null)
        localStorage.removeItem('xecomm-user')
    }
    const isUserLoggedIn = ()=> {
        return user ? true : false
    }

    return(
        <AuthContext.Provider value={{user, login, logout, isUserLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}
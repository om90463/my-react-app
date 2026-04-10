import axios from "axios";
import { adminToken } from "./Config";

const instanse = axios.create({
    baseURL:import.meta.env.VITE_BASE_URL
})

// add bearer token 

instanse.interceptors.request.use((config)=>{
    const token = adminToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

//modify response
instanse.interceptors.response.use((response)=>{
    return response.data;
}, (error)=>{
    if (error?.response?.status === 401) {
        localStorage.removeItem('xecomm-admin-info')
        window.location.href='/admin/login'
    }
    return Promise.reject(error)
})

export default instanse;
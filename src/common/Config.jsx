export const adminToken = ()=> {
    return localStorage.getItem("xecomm-admin-info")? JSON.parse(localStorage.getItem("xecomm-admin-info")).token : null
}

export const userToken = ()=> {
    return localStorage.getItem("xecomm-user")? JSON.parse(localStorage.getItem("xecomm-user")).token : null
}
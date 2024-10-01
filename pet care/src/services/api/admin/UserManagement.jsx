import axios from "axios";
import { apiUrl } from "../../../Config";

export const userManagementAdmin = async(token) =>{
    try{
        const response = await axios.get(`${apiUrl}/api/admin/users`,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response;
    }catch(error){
        console.error('Error in Fetching users in adminDashboard:', error);
    }
}

export const register = async (firstName,lastName,email,password,role,token) =>{
    
    try{
        const response = await axios.post(`${apiUrl}/api/admin/user`,{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            role:role
        },{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
              }
        })
        console.log(response);
        return response;
    }catch(error){
        alert("error in fetching")
    }
};



export const userDeleteManagementAdmin = async(token,userId) =>{
    try{
        const response = await axios.delete(`${apiUrl}/api/admin/user/${userId}`,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response;
    }catch(error){
        console.error('Error in Deleting users in adminDashboard:', error);
    }
}


export const userUpdateManagementAdmin = async(token,user,userId) =>{
    try{
        const response = await axios.put(`${apiUrl}/api/admin/user/${userId}`, user,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response;
    }catch(error){
        console.error('Error in Updating users in adminDashboard:', error);
    }
}


export const userSearchManagementAdmin = async(token,keyword) =>{
    try{
        const response = await axios.get(`${apiUrl}/api/admin/users/search?keyword=${keyword}`,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response;
    }catch(error){
        console.error('Error in Updating users in adminDashboard:', error);
    }
}
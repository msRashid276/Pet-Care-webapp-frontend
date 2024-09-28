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
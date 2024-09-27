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
        console.error('Error fetching in users in admin:', error);
    }
}
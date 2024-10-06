import axios from "axios";
import { apiUrl } from "../../../Config";

export const checkShopIfExist = async(token) =>{
    try{
        const response = await axios.get(`${apiUrl}/api/shop-owner/pet-shop/user`,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response;
    }catch(error){
        console.error('Error in Fetching shop of user:', error);
    }
}
import axios from "axios"
import { apiUrl } from "../../Config"


export const fetchAllPetShops = async(token) =>{

    try{
        const response = await axios.get(`${apiUrl}/api/user/pet-shops`,{
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
        })

        return response;

    }catch(error){
        console.error("Registration Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}
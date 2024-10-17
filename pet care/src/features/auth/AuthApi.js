import axios from "axios"
import { apiUrl } from "../../Config"



export const registerUserApi = async(data) =>{
    try{

        const response = await axios.post(`${apiUrl}/auth/register`,data,{
                headers:{
                    'Content-Type': 'application/json',
                },
        });

        return response.data;

    }catch(error){
        console.error("Registration Error:", error.response ? error.response.data : error.message);
        throw error;
    }
}



export const loginUserApi = () =>{
    try{
        const response = axios.post(`${apiUrl}/auth/authenticate`,data,{
                headers:{
                    'Content-Type': 'application/json',
                },
        })

        return response.data;

    }catch(error){
        throw error;
    }
}
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


export const registerShop = async(formData,token) =>{
    
    
    try{
            console.log(formData,"sssssssssssss");
            
        const response = await axios.post(`${apiUrl}/api/shop-owner/pet-shop`, formData ,{
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        });
        return response;
    }catch(error){
        console.error('Error in registering shop :', error);
    }
}



export const AddSpecies = async(speciesName,token) =>{
    
    
    try{
                
        const response = await axios.post(`${apiUrl}/api/shop-owner/species`,{
            name:speciesName
        },{
            headers: {
               'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        
        return response;
       
        
    }catch(error){
       // Check if the error response exists and contains the specific message
       const errorMsg = error.response?.data?.message || "An unexpected error occurred.";
       console.log(errorMsg);
       // Display the error message as an alert
       alert(errorMsg);
       console.error('Error in Adding the species:', error);;
    }
}



export const checkSpeciesIfExist = async(token) =>{
    try{
        const response = await axios.get(`${apiUrl}/api/shop-owner/species/pet-shop/species`,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
        return response;
    }catch(error){
        console.error('Error in Fetching species of user:', error);
    }
}


export const AddPet = async(formData,token) =>{
     
    try{           
        const response = await axios.post(`${apiUrl}/api/shop-owner/pets`, formData ,{
            headers: {
                'Authorization': `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
            }
        });
        return response;
    }catch(error){
        console.error('Error in Adding Pet:', error);
    }
}

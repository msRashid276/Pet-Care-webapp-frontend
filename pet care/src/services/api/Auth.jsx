import axios from "axios";
import { apiUrl } from "../../Config";


export const register = async (firstName,lastName,email,password,role) =>{
    
        
    try{
        const response = await axios.post(`${apiUrl}/auth/register`,{
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:password,
            role:role
        },{
            headers: {
                'Content-Type': 'application/json'
              }
        })
        console.log(response);
        return response;

    }catch(error){
        console.log(error,"error");    
        alert("error in registering")
    }
};


export const login = async (email,password) =>{
    
        try{
            const response = await axios.post(`${apiUrl}/auth/authenticate`,{
                email:email,
                password:password
            },{
                headers: {
                    'Content-Type': 'application/json'
                  }
            })
            console.log(response);
            
            return response;
        }catch(error){
            alert("error in Logging")
        }
};


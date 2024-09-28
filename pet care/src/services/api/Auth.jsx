import axios from "axios";
import { apiUrl } from "../../Config";


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
            alert("error in fetching")
        }
};
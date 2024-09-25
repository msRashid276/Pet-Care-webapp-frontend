import axios from "axios"
import { apiUrl } from "../Config";




export const login = async (email,password) =>{
    
  

    console.log(apiUrl);
    
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
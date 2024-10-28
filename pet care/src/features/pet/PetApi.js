export const fetchPetsFromPetShopId = async(shopId,token) =>{

    try{
        const response = await axios.get(`${apiUrl}/api/user/pets/pet-shop/${shopId}`,{
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
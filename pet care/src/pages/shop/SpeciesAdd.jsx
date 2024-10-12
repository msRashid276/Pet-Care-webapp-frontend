import React, { useContext, useState } from "react";
import { AddSpecies } from "../../services/api/shop/ShopManagement";
import AuthContext from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const SpeciesAdd = () => {

  const {auth} = useContext(AuthContext);
  const navigate = useNavigate();


  const [species,setSpecies] = useState({
    speciesName:""
  })

  const handleInputChange = (e) => {
      const name = e.target.name;
      const value = e.target.value;

     setSpecies((prev)=>({
        ...prev,
        [name] : value
     }   
     )) 
  }

  const handleSubmit = async (e) => {
      e.preventDefault();

      try{
        
        const speciesResponse = await AddSpecies(species.speciesName,auth.token)
        console.log(speciesResponse);

        if (speciesResponse && (speciesResponse.status === 200 || speciesResponse.status === 201)) {
          alert("Species successfully added!");
          navigate("/shop/add-pets");
        } else {
          const errorMessage =
            speciesResponse.data?.message ||
            "Failed to add species. Please check your input.";
          alert(errorMessage);
        }
      } catch (error) {
        const errorMsg =
          error.speciesResponse?.data?.message ||
          "An unexpected error occurred. Please try again.";
        alert(errorMsg);
        console.error("Error during adding species:", error);
      }
  }

  return (
    <div className="bg-gray-900 w-full min-h-screen text-white py-10">
      <h1 className="text-center text-2xl font-bold pb-10">Add New Species</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 px-10 overflow-hidden">
          

          <div className="flex justify-center items-center">
            <input
              type="text"
              className="max-w-sm bg-transparent border border-gray-700 rounded-lg p-2 w-full hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Species name"
              name="speciesName"
              onChange={handleInputChange}   
              value={species.speciesName}
            />
          </div>
        
          <div className="flex justify-center items-center p    y-2">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Species
            </button>
          </div>
        
        </div>
      </form>
    </div>
  );
};

export default SpeciesAdd;

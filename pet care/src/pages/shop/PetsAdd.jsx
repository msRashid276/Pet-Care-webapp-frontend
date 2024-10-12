import React, { useContext, useEffect, useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import AuthContext from "../../providers/AuthProvider";
import {
  checkShopIfExist,
  checkSpeciesIfExist,
  registerShop,
} from "../../services/api/shop/ShopManagement";
import { CircularProgressbar } from "react-circular-progressbar";
import axios from "axios";

const PetsAdd = () => {
  const { auth } = useContext(AuthContext);
  const [imageFile, setImageFile] = useState([]);
  const [imagePreview, setImagePreview] = useState([]);
  const navigate = useNavigate();
  const [species, setSpecies] = useState([]);

  useEffect(() => { 

      fetchSpeciesList();
  
    
    // petShopExistence();
  }, [auth]);

  const fetchSpeciesList = async () => {


    try {
    const token = auth?.token;  // Fetching token from AuthContext
    if (token) {
      const response = await checkSpeciesIfExist(token);
      console.log(response.data, "speciesDetails");

      if (response.status === 200 || response.status === 201) {
        setSpecies(response.data);
      }
    } else {
      console.log("No token available in context.");
    }
  } catch (error) {
    console.log("no species found: ", error);
  }
    

    
  };

  
  const petShopExistence = async() =>{

    if(auth){
      try {
        const response = await checkShopIfExist(auth.token); // Call to check if shop exists
        if (response && (response.status === 200 || response.status === 201)) {
          const petShopId = response.data.id; // Adjust according to your actual response structure
          console.log(petShopId,"petshopid");
          
          setPet((prev) => ({
            ...prev,
            petShopId: petShopId, // Set petShopId in the pet state
          }));
          
          
        } else {
          const errorMessage =
            response.data?.message || "Error checking shop existence";
          alert(errorMessage);
        }
      } catch (error) {
        const errorMsg = error.response?.data?.message || "Please add shop.";
        alert(errorMsg);
      }
    }
    
  }
  


  const [pet, setPet] = useState({
    name: "Buddy",
    speciesId: "",
    breed: "Golden Retriever",
    age: 3,
    gender: "Male",
    price: 1200,
    images: [],
    description:
      "A friendly and playful golden retriever, great with families and children.",
    petShopId: "",
  });

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFile((prevFiles) => [...prevFiles, ...files]);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreview((previewImage) => [...previewImage, ...previews]);
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setPet((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSpeciesChange = (e) => {
    const speciesid = e.target.value;
    setPet((prev) => ({
      ...prev,
      speciesId: speciesid,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
 
    

    // Check if at least one image file is selected
    if (imageFile.length === 0) {
      alert("Please select at least one image file.");
      return;
    }

    try {
      const shopImage = new FormData();

      imageFile.forEach((file) => shopImage.append("shopImageFile", file));

      const uploadResponse = await axios.post(
        "http://localhost:8080/cloudinary/upload",
        shopImage,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(uploadResponse, "uploadResponse");

      const imageUrls = uploadResponse.data.map((image) => image.secure_url);
      console.log(imageUrls, "imageUrls");

      const updatedImage = [...shop.images, ...imageUrls];
      const petShopData = { ...shop, images: updatedImage };

      const formData = new FormData();
      formData.append(
        "shop",
        new Blob([JSON.stringify(petShopData)], { type: "application/json" })
      );

      console.log(petShopData, "petShopData");

      const response = await registerShop(formData, auth.token);
      if (response.status === 200 || response.status === 201) {
        alert("Added Petshop Successfully");
        navigate("/shop/details");
      }
    } catch (error) {
      console.log("Status code", error);
    }
  };




  return (
    <div className="bg-gray-900 w-full min-h-screen text-white py-10">
      <h1 className="text-center text-2xl font-bold pb-10">Add New Pet</h1>

      <form action="" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-5 px-10 overflow-hidden">
          <div className="flex gap-2">
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              multiple
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <label className="relative" htmlFor="fileInput">
              <span className="w-16 h-16 md:w-24 md:h-24 cursor-pointer p-3 flex items-center justify-center border rounded-md border-gray-600">
                <MdOutlineAddPhotoAlternate />
              </span>
              {imageFile && (
                <div className="absolute left-0 right-0 top-0 bottom-0 w-24 h-24 flex justify-center items-center">
                  <CircularProgressbar />
                </div>
              )}
            </label>
            <div className="flex flex-wrap gap-3">
              {imagePreview.map((previewImage, index) => (
                <div key={index} className="relative ">
                  <img
                    src={previewImage}
                    alt={`Selected ${index}`}
                    className="w-24 h-24 rounded-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg p-2 w-full hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Name"
              name="name"
              onChange={handleInputChange}
              value={pet.name}
            />
          </div>
          <div className="flex justify-center items-center">
            <select
              type="text"
              className="bg-gray-900 border border-gray-700 rounded-lg p-2 w-full hover:border-gray-700 focus:outline-none"
              placeholder="species name"
              name="speciesId"
              onChange={handleSpeciesChange}
              value={pet.speciesId}
            >
              <option  value="" disabled>Select Species...</option>
              {species.map((specie) => (
                <option  value={specie.id} key={specie.id}>
                     {specie.name || 'Unknown Species'}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Breed"
              name="breed"
              onChange={handleInputChange}
              value={pet.breed}
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-2">
         
            <input
              type="number"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Age"
              name="age"
              onChange={handleInputChange}
              value={pet.age}
            />
          
            <select
              className="bg-transparent border  border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none "
              name="gender"
              onChange={handleInputChange}
              value={pet.gender} // Assuming shop.gender holds the selected value
            >
              <option className="text-black" value="" disabled>
                Select Gender
              </option>
              <option className="text-black" value="male">Male</option>
              <option className="text-black" value="female">Female</option>
            </select>

          </div>


          <div className="flex justify-center">
            <input
              type="number"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Price"
              name="price"
              onChange={handleInputChange}
              value={pet.price}
            />
          </div>
          
          <div className="flex justify-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Description"
              name="description"
              onChange={handleInputChange}
              value={pet.description}
            />
          </div>
          

          <div className="flex justify-center items-center py-4">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Add Pet
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PetsAdd;

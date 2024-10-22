import React, { useContext, useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import AuthContext from "../../providers/AuthProvider";
import { registerShop } from "../../services/api/shop/ShopManagement";
import { useFormik } from "formik";
import { CircularProgressbar } from "react-circular-progressbar";
import axios from "axios";

const RegisterShop = () => {
  const { auth } = useContext(AuthContext);
  // const formik = useFormik();
  const [imageFile, setImageFile] = useState([]);
  const [imagePreview,setImagePreview] = useState([]);

  const navigate = useNavigate();

  const [shop, setShop] = useState({
    name: "",
    description: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
    },
    contactInformation: {
      email: "",
      mobile: "",
      twitter: "",
      instagram: "",
    },
    openingHours: "Mon-Sat: 9:00 AM - 7:00 PM",
    images: [],
    registrationDate: "",
    open: false,
  });

  const handleImageChange = (e) => {
    
    const files = Array.from(e.target.files);
    setImageFile((prevFiles)=>[...prevFiles,...files]);

    
    const previews = files.map((file)=>URL.createObjectURL(file));
    setImagePreview((previewImage)=>[...previewImage,...previews]);

  };

  console.log(imageFile,"yooo");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name in shop.address) {
      setShop((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else if (name in shop.contactInformation) {
      setShop((prev) => ({
        ...prev,
        contactInformation: {
          ...prev.contactInformation,
          [name]: value,
        },
      }));
    } else {
      setShop((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
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

      imageFile.forEach((file)=>(
        shopImage.append("shopImageFile",file)
      ))
   

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
      <h1 className="text-center text-2xl font-bold pb-10">Add New PetShop</h1>

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
              {imagePreview.map((previewImage,index)=>(
                <div key={index} className="relative ">
                  <img src={previewImage} alt={`Selected ${index}`}   className="w-24 h-24 rounded-sm"/>
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
              value={shop.name}
            />
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Description"
              name="description"
              onChange={handleInputChange}
              value={shop.description}
            />
          </div>
          <div className="flex justify-center gap-2">
            <div className="relative w-full">
              <input
                type="text"
                id="Opening hours"
                aria-describedby="outlined_success_help"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-700 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                placeholder=""
                value={shop.openingHours}
                name="openingHours"
                onChange={handleInputChange}
              />
              <label
                htmlFor="Opening hours"
                className="absolute text-sm text-gray-300 dark:text-gray-300 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Opening hours
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Street Address"
              name="street"
              onChange={handleInputChange}
              value={shop.address.street}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-2 ">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="City"
              name="city"
              onChange={handleInputChange}
              value={shop.address.city}
            />
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="State/Province"
              name="state"
              onChange={handleInputChange}
              value={shop.address.state}
            />
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Postal Code"
              name="zipCode"
              onChange={handleInputChange}
              value={shop.address.zipCode}
            />
          </div>
          {/* <div className="flex justify-center">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Country"
            />
          </div> */}
          <div className="flex flex-col md:flex-row justify-center gap-2">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={shop.contactInformation.email}
            />
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Mobile"
              name="mobile"
              onChange={handleInputChange}
              value={shop.contactInformation.mobile}
            />
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-2">
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Twitter"
              name="twitter"
              onChange={handleInputChange}
              value={shop.contactInformation.twitter}
            />
            <input
              type="text"
              className="bg-transparent border border-gray-700 rounded-lg w-full p-2 hover:border-gray-700 focus:outline-none dark:focus:border-gray-500"
              placeholder="Instagram"
              name="instagram"
              onChange={handleInputChange}
              value={shop.contactInformation.instagram}
            />
          </div>

          <div className="flex justify-center items-center py-4">
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              RegisterShop
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterShop;

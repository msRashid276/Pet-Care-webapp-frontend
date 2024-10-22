import React from "react";

const ShopCard = ({ shop,handleId }) => {


  const handleCardClick = () =>{
      handleId(shop.id)
      console.log(shop.id);
  }

  return (
    <div className="max-w-sm bg-white rounded-lg hover:transition-transform duration-300 ease-in-out transform hover:scale-95" onClick={handleCardClick}>
      <div className="w-full">
        <img className="w-full h-48 rounded-2xl object-cover"  src={shop.images[0]} alt="" />
      </div>
      <div className="p-5">
        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {shop.name} 
          </h5>
       
        <p className="mb-3 font-thin text-gray-900 dark:text-gray-400">
          {shop.description}
        </p>
        <p className=" font-thin text-gray-500 text-sm dark:text-gray-400">
          {shop?.address.city}
        </p>
      </div>
    </div>

    // <div className="border rounded-lg p-6 shadow-lg">
    //   <h2 className="text-xl font-bold mb-2">{shop.name}</h2> {/* Example: shop.name */}
    //   <p className="text-gray-700 mb-2">Location: {shop?.contactInformation.email}</p> {/* Example: shop.location */}
    //   <p className="text-gray-700 mb-2">Contact: {shop.contact}</p> {/* Example: shop.contact */}
    //   <p className="text-gray-700">{shop?.description}</p> {/* Example: shop.description */}
    // </div>
  );
};

export default ShopCard;

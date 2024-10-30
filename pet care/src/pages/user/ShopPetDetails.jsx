import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { petShopById } from "../../features/shop/ShopSlice";
import { petsFromShopId } from "../../features/pet/PetSlice";
import { HiOutlineSearch } from "react-icons/hi";
import PetCard from "../../components/user/shopPetDetails/PetCard";

const ShopPetDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedPetShop } = useSelector((state) => state.petShop);
  const { petsInPetShop } = useSelector((state)=>state.pets)

  

  useEffect(() => {
    if (id) {
      // dispatch(petShopById(id));
      dispatch(petsFromShopId(id));
    }
  }, [dispatch, id]);

  return (
    <div className="w-full bg-white py-5">
      {/* search start*/}
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="w-full bg-gray-100 p-4 rounded-lg relative">
          <input
            type="text"
            className="w-full outline-none bg-gray-100 placeholder-gray-500 font-medium"
            placeholder="Search for pets"
          />
          <HiOutlineSearch
            fontSize={24}
            className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500"
          />
        </div>
      </div>
      {/* search end */}

      {/* pets details start */}
      <div className="w-full pt-5">
        <div className="max-w-screen-xl flex flex-col flex-wrap mx-auto p-4 max-sm:justify-center">
          <div className="space-y-4">
            <div className="flex">
              <div className="h-5 w-3 rounded-sm bg-red-600 mr-3"></div>
              <p className="text-red-600 text-sm font-semibold">Our Pets</p>
            </div>
            <h1 className="text-2xl font-semibold pb-6">
              Explore Our Pets
            </h1>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
              {petsInPetShop && petsInPetShop.length > 0 ?(
                Array.isArray(petsInPetShop) && 
                petsInPetShop.map((pet,index)=>(
                  <PetCard key={pet.id} pet={pet} />
                ))
              ):(
                <div>No Pets Available</div>
              )}
          </div>
          
          
          
        </div>
      </div>
      {/* petdetails end */}



    </div>
  );
};

export default ShopPetDetails;

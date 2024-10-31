import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/user/carousel/Carousel";
import { fetchPetShops } from "../../features/shop/ShopSlice";
import ShopView from "../../components/user/home/ShopCard";
import { Link, useNavigate } from "react-router-dom";
import registerImage from '../../assets/user/register&login/registerImagePet.jpg'

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { petShop } = useSelector((state) => state.petShop);
  // console.log(petShop, "token iam here in home page");

  useEffect(() => {
    dispatch(fetchPetShops());
  }, [dispatch]);

  const handleShopId = (shopId) =>{
    navigate(`/user/shop-petdetails/${shopId}`)
  }

  return (
    <div className="bg-white">
      {/* <Carousel/> */}


      <div class="m-10 mx-auto max-w-screen-xl overflow-hidden rounded-xl border shadow-lg md:pl-8 ">
  <div class="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
    <div class="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
      <h2 class="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">Find Your Best Friend</h2>
      <p class="mt-2 text-lg">Pet Adoption Collection</p>
      <p class="mt-4 mb-8 max-w-md text-gray-500">Looking for a new friend? Explore our selection of lovable pets waiting for a caring home. Every pet deserves a family.</p>
      <a href="#" class="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
        <span class="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Buy Now </span>
        <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>

    <div class="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
      <img class="h-full w-full object-cover" src={registerImage} loading="lazy" />
    </div>
  </div>
</div>





      {/* Pet Shop  */}
      <div className="w-full pt-5">
        <div className="max-w-screen-xl flex flex-row flex-wrap mx-auto p-4 max-sm:justify-center">
          <div className="space-y-4">
            <div className="flex">
              <div className="h-5 w-3 rounded-sm bg-red-600 mr-3"></div>
              <p className="text-red-600 text-sm font-semibold">Our PetShops</p>
            </div>
            <h1 className="text-2xl font-semibold pb-6">Explore Our Pet Shops</h1>
          </div>
         
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
            {petShop && petShop.length > 0 ? (
              Array.isArray(petShop) &&
              petShop.map((shop, index) => (
                <ShopView key={shop.id} shop={shop} handleId={handleShopId}/>
              ))
            ) : (
              <div>No pet shops available</div>
            )}
          </div>
         
        </div>
      </div>
      {/* petshop end */}


    </div>
  );
};

export default Home;

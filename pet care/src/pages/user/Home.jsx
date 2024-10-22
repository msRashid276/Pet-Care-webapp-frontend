import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/user/carousel/Carousel";
import { fetchPetShops } from "../../features/shop/ShopSlice";
import ShopView from "../../components/user/home/ShopCard";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { petShop } = useSelector((state) => state.petShop);
  console.log(petShop, "token iam here in home page");

  useEffect(() => {
    dispatch(fetchPetShops());
  }, [dispatch]);

  const handleShopId = (shopId) =>{
    navigate(`/user/shop-petdetails/${shopId}`)
  }

  return (
    <div>
      {/* <Carousel/> */}


      {/* Pet Shop  */}
      <div className="bg-white w-full pt-5">
        <div className="max-w-screen-xl flex flex-row flex-wrap mx-auto p-4 max-sm:justify-center">
          <div className="space-y-4">
            <div className="flex">
              <div className="h-5 w-3 rounded-sm bg-red-600 mr-3"></div>
              <p className="text-red-600 text-sm font-semibold">Our Pets</p>
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

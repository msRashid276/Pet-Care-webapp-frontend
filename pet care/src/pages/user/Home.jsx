import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/user/carousel/Carousel";
import { fetchPetShops } from "../../features/shop/ShopSlice";
import ShopView from "../../components/user/home/ShopView";

const Home = () => {
  const dispatch = useDispatch();
  // const { user, token } = useSelector((state) => state.auth); // Retrieve token from the auth state
  const { petShop } = useSelector((state) => state.petShop);
  console.log(petShop, "token iam here in home page");

 
    useEffect(() => {
      dispatch(fetchPetShops());
    }, [dispatch]);


  return (
    <div>
      {/* <Carousel/> */}

      {/* Pet Shop  */}

      <div className="bg-white w-full pt-5">
        
        {petShop && petShop.length > 0 ? (
            Array.isArray(petShop) && petShop.map((shop, index) => (
              <ShopView key={shop.id} shop={shop} />
            ))
          ) : (
            <div>No pet shops available</div>
          )}
        </div>
      
    </div>
  );
};

export default Home;

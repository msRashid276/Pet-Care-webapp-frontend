import React, { useContext, useEffect, useState } from "react";
import { checkShopIfExist } from "../../services/api/shop/ShopManagement";
import AuthContext from "../../providers/AuthProvider";

const ShopDetails = () => {
  const { auth } = useContext(AuthContext);
  const [shopDetails, setShopDetails] = useState(null);

  useEffect(() => {
    fetchShopDetails();
  }, [auth]);

  const fetchShopDetails = async () => {
    try {
      const response = await checkShopIfExist(auth.token);
      console.log(response.data, "shopDetails");

      if (response.status === 200 || response.status === 201) {
        setShopDetails(response.data);
      }
    } catch (error) {
      console.log("no shop found: ", error);
    }
  };

  // If shopDetails is null or not loaded yet
  if (!shopDetails) {
    return <div className="text-3xl font-semibold ">Loading...</div>;
  }

  const { address, contactInformation, description, name, openingHours, open, owner } = shopDetails;

  return (
    <div className="bg-gray-900 text-white p-6 w-full h-screen">
      <h1 className="text-3xl font-bold text-center py-5">{name || "Pet Shop"}</h1>

      {/* Shop Section */}
      <div className="bg-gray-800 mb-4 p-4 flex-wrap">
        <h2 className="text-xl text-bold">PetShop</h2>
        <div className="pt-5 flex flex-col gap-4">
          <div className="flex">
            <div className="basis-2/5">Owner</div>
            <div className="basis-1/5">:</div>
            <div className="basis-2/5">{owner?.firstName || "N/A"}</div>
          </div>
          <div className="flex">
            <div className="basis-2/5">PetShop name</div>
            <div className="basis-1/5">:</div>
            <div className="basis-2/5">{name || "N/A"}</div>
          </div>
          <div className="flex">
            <div className="basis-2/5">Opening hours</div>
            <div className="basis-1/5">:</div>
            <div className="basis-2/5">{openingHours || "N/A"}</div>
          </div>
          <div className="flex">
            <div className="basis-2/5">Status</div>
            <div className="basis-1/5">:</div>
            <div className="basis-2/5">{open ? "Open" : "Closed"}</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Address Section */}
        <div className="bg-gray-800 p-4 flex-wrap">
          <h2 className="text-xl text-bold">Address</h2>
          <div className="pt-5 flex flex-col gap-4">
            <div className="flex">
              <div className="basis-2/5">Street</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">{address?.street || "N/A"}</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">City</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">{address?.city || "N/A"}</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">State</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">{address?.state || "N/A"}</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">Postal Code</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">{address?.zipCode || "N/A"}</div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-800 p-4 flex-wrap">
          <h2 className="text-xl text-bold">Contact</h2>
          <div className="pt-5 flex flex-col gap-4">
            <div className="flex">
              <div className="basis-2/5">Email</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">{contactInformation?.email || "N/A"}</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">Mobile</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">{contactInformation?.mobile || "N/A"}</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">Instagram</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">{contactInformation?.instagram || "N/A"}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;

import React from "react";

const ShopDetails = () => {
  return (
    <div className="bg-gray-900 text-white p-6 w-full h-screen">
      <h1 className="text-3xl font-bold text-center py-5">Roms N Raks</h1>

      {/* Restaurant Section */}
      <div className="bg-gray-800 mb-4 p-4 flex-wrap">
        <h2 className="text-xl text-bold">PetShop</h2>
        <div className="pt-5 flex flex-col gap-4">
          <div className="flex">
            <div className="basis-2/5">Owner</div>
            <div className="basis-1/5">:</div>
            <div className="basis-2/5">Rashid</div>
          </div>
          <div className="flex">
            <div className="basis-2/5">PetShop name</div>
            <div className="basis-1/5">:</div>
            <div className="basis-2/5">name</div>
          </div>
          <div className="flex">
            <div className="basis-2/5">Opening hours</div>
            <div className="basis-1/5">:</div>
            <div className="basis-2/5">Mon-Sun 9.00 Am - 9.00 PM</div>
          </div>
          <div className="flex">
            <div className="basis-2/5">Status</div>
            <div className="basis-1/5">:</div>
            <div className="basis-2/5">closed</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/*  Address */}
        <div className="bg-gray-800 p-4 flex-wrap">
          <h2 className="text-xl text-bold">PetShop</h2>
          <div className="pt-5 flex flex-col gap-4">
            <div className="flex">
              <div className="basis-2/5">Country</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">India</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">City</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">Kerala</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">Postal Code</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">682019</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">Street Address</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">nill</div>
            </div>
          </div>
        </div>

        {/* contact */}
        <div className="bg-gray-800 p-4 flex-wrap">
          <h2 className="text-xl text-bold">PetShop</h2>
          <div className="pt-5 flex flex-col gap-4">
            <div className="flex">
              <div className="basis-2/5">Email</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">rashidmohammed276@gmail.com</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">Mobile</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">9048092961</div>
            </div>
            <div className="flex">
              <div className="basis-2/5">Social</div>
              <div className="basis-1/5">:</div>
              <div className="basis-2/5">Mon-Sun 9.00 Am - 9.00 PM</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ShopDetails;

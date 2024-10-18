import React from 'react'

const ShopView = ({shop}) => {
  return (
    <div className="max-w-screen-xl flex flex-wrap mx-auto p-4">
    <div className="border rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-2">{shop.name}</h2> {/* Example: shop.name */}
      <p className="text-gray-700 mb-2">Location: {shop?.contactInformation.email}</p> {/* Example: shop.location */}
      <p className="text-gray-700 mb-2">Contact: {shop.contact}</p> {/* Example: shop.contact */}
      <p className="text-gray-700">{shop?.description}</p> {/* Example: shop.description */}
    </div>
  </div>
  )
}

export default ShopView
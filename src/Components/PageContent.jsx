/** @format */

import React from 'react'
import { useNavigate } from 'react-router-dom'
const PageContent = () => {
  const navigate = useNavigate()
  const handleAddProduct = () => {
    navigate('/product')
  }

  return (
    <main className="flex-1 p-4  bg-gray-50 border-dotted h-screen">
      <h1 className="m-4 text-blue-900 font-bold text-2xl md:text-3xl">
        Inventory
      </h1>
      <div className=" flex flex-col items-center justify-center bg-gray-100 text-gray-700 border border-dotted border-indigo-600 px-4 sm:px-4 md:px-6 rounded-lg md:rounded-xl shadow-lg h-4/5 ">
        <div className="max-w-md md:max-w-lg text-center ">
          <h1 className="font-bold text-blue-800 text-base md:text-lg lg:text-2xl ">
            You have no products
          </h1>
          <p className="mt-2 text-xs md:text-xs lg:text-xs">
            You can start selling as soon as you add a product.
          </p>
        </div>

        <button
          className="p-2 bg-blue-600 rounded text-white mt-3 text-sm "
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
    </main>
  )
}

export default PageContent

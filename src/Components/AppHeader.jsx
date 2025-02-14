/** @format */

import React from 'react'
import { FaSearch } from 'react-icons/fa'
const AppHeader = () => {
  return (
    <nav className="h-16 bg-gray-100 flex items-center px-4">
      <div className="flex-1 relative ">
        <input
          type="search"
          className="p-2 border focus:outline-none border-black w-64 m-2 rounded text-xs"
          name=""
          id=""
          placeholder="        Search products ...."
        />
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 text-lg cursor-pointer " />
      </div>
    </nav>
  )
}

export default AppHeader

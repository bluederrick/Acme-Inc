/** @format */

import React, { useState } from 'react'
import {
  FaHome,
  FaBoxOpen,
  FaShoppingCart,
  FaUsers,
  FaChartLine,
  FaBars,
  FaTimes,
  FaBell,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Toggle Button for Small Screens */}
      <button
        className="p-2 m-2 text-white bg-blue-600 rounded-md md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes className="text-xl" />
        ) : (
          <FaBars className="text-xl" />
        )}
      </button>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 w-64 bg-blue-100 text-blue-600 text-sm h-screen p-4 font-sans fixed md:static top-0 left-0 transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Acme Inc</h2>
          <FaBell className="text-2xl text-blue-300 cursor-pointer" />
        </div>
        <hr className="mt-5 font-bold" />
        <ul className="mt-4 space-y-2">
          <li className="flex items-center gap-x-3 p-2 hover:bg-blue-300 rounded">
            <FaHome className="text-xl" />
            <a href="#" className="block">
              <Link to="/" className="block">
                Home
              </Link>
            </a>
          </li>
          <li className="flex items-center gap-x-3 p-2 hover:bg-blue-300 rounded">
            <FaShoppingCart className="text-xl" />
            <a href="#" className="block">
              Order
            </a>
          </li>
          <li className="flex items-center gap-x-3 p-2 hover:bg-blue-300 rounded">
            <FaBoxOpen className="text-xl" />
            <a href="#" className="block">
              <Link to="/product" className="block">
                Products
              </Link>
            </a>
          </li>
          <li className="flex items-center gap-x-3 p-2 hover:bg-blue-300 rounded">
            <FaUsers className="text-xl" />
            <a href="#" className="block">
              Customers
            </a>
          </li>
          <li className="flex items-center gap-x-3 p-2 hover:bg-blue-300 rounded">
            <FaChartLine className="text-xl" />
            <a href="#" className="block">
              Analytics
            </a>
          </li>
        </ul>
      </aside>
    </>
  )
}

export default SideMenu

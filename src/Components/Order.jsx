/** @format */

import { useState } from 'react'
import PropTypes from 'prop-types' // Import prop-types

const OrderList = ({ orders }) => {
  const itemsPerPage = 5 // Adjust the number of items per page
  const [currentPage, setCurrentPage] = useState(1)

  // Calculate total pages
  const totalPages = Math.ceil(orders.length / itemsPerPage)

  // Get current page orders
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage)

  // Handle pagination
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div className="bg-gray-100">
      <nav className="flex justify-between items-center bg-white text-black p-4 border border-indigo-100">
        <h1 className="text-xl text-blue-800 font-semibold">Orders</h1>
      </nav>

      <div className="mt-10 mx-16 bg-white rounded-lg border border-indigo-100">
        <h2 className="text-xl font-bold mt-8 mx-4">Recent Orders</h2>
        <input
          type="search"
          className="p-2 border focus:outline-none border-black w-64 m-2 rounded text-xs"
          placeholder="Search orders..."
        />

        <ul className="shadow-lg p-4 text-xs">
          {/* Table Header */}
          <li className="grid grid-cols-5 font-semibold p-2 rounded-lg mb-2">
            <span>Order ID</span>
            <span>Customer</span>
            <span>Date</span>
            <span>Total</span>
            <span>Status</span>
          </li>

          {/* Display current orders */}
          {currentOrders.length > 0 ? (
            currentOrders.map((order) => (
              <li
                key={order.Order_ID}
                className="grid grid-cols-5 p-2 border-b"
              >
                <span>{order.Order_ID}</span>
                <span>{order.Customer}</span>
                <span>{order.Date}</span>
                <span>{order.Total}</span>
                <span
                  className={`w-12 h-6 rounded-lg p-1 ${
                    order.stock === 'Shipped'
                      ? 'text-white bg-green-500'
                      : 'text-white bg-yellow-500'
                  }`}
                >
                  {order.stock}
                </span>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center">No orders available.</p>
          )}
        </ul>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center p-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white'
            }`}
          >
            Previous
          </button>

          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

// ✅ Add Prop Types Validation
OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      Order_ID: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      Customer: PropTypes.string.isRequired,
      Date: PropTypes.string.isRequired,
      Total: PropTypes.string.isRequired,
      stock: PropTypes.string.isRequired,
    })
  ),
}

// ✅ Add Default Props (Optional)
OrderList.defaultProps = {
  orders: [],
}

export default OrderList

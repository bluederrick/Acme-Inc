/** @format */

import { useState } from 'react'
import PropTypes from 'prop-types' // Import prop-types
import { FaImage } from 'react-icons/fa'

const ProductCatalog = ({ products }) => {
  const itemsPerPage = 5 // Adjust the number of items per page
  const [currentPage, setCurrentPage] = useState(1)

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage)

  // Get current page products
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage)

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
        <h1 className="text-xl text-blue-800 font-semibold">Products</h1>
        <button className="bg-blue-600 text-white px-6 py-2 text-xs rounded">
          + Add Product
        </button>
      </nav>

      <div className="mt-10 mx-16 bg-white rounded-lg border border-indigo-100">
        <h2 className="text-xl font-bold mt-8 mx-4">Product Overview</h2>
        <input
          type="search"
          className="p-2 border focus:outline-none border-black w-64 m-2 rounded text-xs"
          placeholder="Search products..."
        />

        <ul className="shadow-lg p-4 text-xs">
          {/* Table Header */}
          <li className="grid grid-cols-6 font-semibold p-2 rounded-lg mb-2">
            <span>Image</span>
            <span>Name</span>
            <span>SKU</span>
            <span>Price</span>
            <span>Stock</span>
            <span>Status</span>
          </li>

          {/* Display current products */}
          {currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <li key={product.id} className="grid grid-cols-6 p-2 border-b">
                <div className="w-8 h-10">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FaImage className="w-full h-full text-gray-400" />
                  )}
                </div>
                <span className="mr-3">{product.name}</span>
                <span>{product.sku}</span>
                <span>{product.price}</span>
                <span>{product.stock}</span>
                <span
                  className={`w-12 h-6 rounded-lg p-1 ${
                    product.status === 'Active'
                      ? 'text-black-600 text-xs bg-blue-300'
                      : 'text-black-600 text-xs'
                  }`}
                >
                  {product.status}
                </span>
              </li>
            ))
          ) : (
            <p className="text-gray-500 text-center">No products available.</p>
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
ProductCatalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string,
      name: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      stock: PropTypes.number.isRequired,
      status: PropTypes.string.isRequired,
    })
  ),
}

// ✅ Add Default Props (Optional)
ProductCatalog.defaultProps = {
  products: [],
}

export default ProductCatalog

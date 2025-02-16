/** @format */
import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import PageContent from './Components/PageContent' // Your main page content component
import ProductCatalog from './Components/ProductCatalog'
import Order from './Components/Order'
import Login from './Components/Login'

// Demo products (this would usually come from an API)
const demoProducts = [
  {
    id: 1,
    image: '', // Replace with actual image URL
    name: 'Product 1',
    sku: 'CHAIR001',
    price: '$20',
    stock: 50,
    status: 'Active',
  },
  {
    id: 2,
    image: '',
    name: 'Ergonomic Chair',
    sku: 'DESK001',
    price: '$30',
    stock: 0,
    status: 'out of stock',
  },
  {
    id: 3,
    image: '',
    name: 'Standing Desk',
    sku: 'MOUSE001',
    price: '$30',
    stock: 50,
    status: 'Active',
  },
  {
    id: 4,
    image: '',
    name: 'Wireless Mouse',
    sku: 'KEY001',
    price: '$30',
    stock: 50,
    status: 'Active',
  },
  {
    id: 5,
    image: '',
    name: 'Mechanical Keyboard',
    sku: 'SKU67890',
    price: '$30',
    stock: 0,
    status: 'Active',
  },
  {
    id: 6,
    image: '',
    name: 'Product 2',
    sku: 'SKU67890',
    price: '$30',
    stock: 12,
    status: 'Active',
  },
  {
    id: 7,
    image: '',
    name: 'Product 2',
    sku: 'SKU67890',
    price: '$30',
    stock: 10,
    status: 'Active',
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/50',
    name: 'Product 2',
    sku: 'SKU67890',
    price: '$30',
    stock: 0,
    status: 'out of stock',
  },
]

const demoOrders = [
  {
    Order_ID: 'ORDO0',
    Customer: 'John Doe', // Replace with actual image URL
    Date: '2023-05-01',
    Total: '$99.99',
    Status: '$20',
    stock: 'Shipped',
  },
  {
    Order_ID: 1,
    Customer: 'John Doe', // Replace with actual image URL
    Date: '2023-05-01',
    Total: '$99.99',
    Status: '$20',
    stock: 'processing',
  },
]

function App() {
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([])

  // Simulate fetching data from an API
  useEffect(() => {
    setProducts(demoProducts)
    setOrders(demoOrders)
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Default index route */}
          <Route index element={<PageContent />} />
          <Route path="order" element={<Order orders={orders} />} />
          <Route
            path="product"
            element={<ProductCatalog products={products} />}
          />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

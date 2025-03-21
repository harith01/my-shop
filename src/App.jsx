import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"
import OrderConfirmation from "./pages/OrderConfirmation"
import { useState } from "react"
import ProductPage from "./pages/ProductPage"
import Register from "./pages/Register"
import { useSelector } from "react-redux"
import FilteredProducts from "./pages/FilteredProducts"
import Footer from "./components/Footer"


function App() {

  const [order, setOrder] = useState(null)
  const username = useSelector(state => state.auth.username)

  console.log(username)
  const ProtectedRoute = ({ children }) => {
    if (!username) {
      return <Navigate to="/" replace />
    }
    return children
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/*' element={
          <ProtectedRoute>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
              <Route path="/order-confirmation" element={<OrderConfirmation order={order} />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/filtered-products" element={<FilteredProducts />} />
            </Routes>
          </ProtectedRoute>}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
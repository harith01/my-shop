import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Checkout from "./pages/Checkout"
import OrderConfirmation from "./pages/OrderConfirmation"
import { useState } from "react"


function App() {
  
  const [order, setOrder] = useState(null)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<OrderConfirmation order={order}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

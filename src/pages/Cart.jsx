import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../redux/cartSlice'
import CartItem from '../components/cartItem'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  console.log(cartItems)
  return (
    <div>
      {cartItems?.map(item => <CartItem item={item} />)}
    </div>
  )
}

export default Cart
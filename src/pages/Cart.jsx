import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../redux/cartSlice'
import CartItem from '../components/cartItem'

const Cart = () => {
  const cartItems = useSelector(selectCartItems)
  console.log(cartItems)
  return (
    <div className='px-10'>
      <h2 className='text-2xl font-semibold m-2'>Cart</h2>
      {cartItems?.map(item => <CartItem item={item} />)}
    </div>
  )
}

export default Cart
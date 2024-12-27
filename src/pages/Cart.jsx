import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectTotalPrice } from '../redux/cartSlice'
import CartItem from '../components/cartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectTotalPrice)
  return (
    <div className='px-10 w-full md:flex gap-4'>
      <div className='basis-3/4 justify-between'>
        <h2 className='text-2xl font-semibold m-2'>Cart</h2>
        {cartItems?.map(item => <CartItem item={item} />)}
      </div>
      <div className='shadow-md h-max mt-6 px-4 py-2 '>
        <h2 className='text-2xl font-semibold m-2'>Cart Summary</h2>
        <div className='flex justify-between gap-3'>
          <p>Subtotal:</p>
          <p>{totalPrice}</p>
        </div>
        <button onClick={() => navigate('/checkout')} className='bg-red-600 w-full py-3 hover:bg-red-400 '>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
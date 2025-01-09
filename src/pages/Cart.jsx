import React from 'react'
import { useSelector } from 'react-redux'
import { selectCartItems, selectTotalPrice } from '../redux/cartSlice'
import CartItem from '../components/CartItem'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectTotalPrice)

  if (cartItems.length === 0) {
    return (
      <div className='flex flex-col items-center justify-center h-screen gap-4'>
        <h2 className='text-2xl font-semibold'>Your Cart is empty</h2>
        <button className='bg-red-600 hover:bg-red-700 px-5 py-3 text-white rounded-xl' onClick={() => navigate('/home')}>Go Shopping</button>
      </div>
    )
  }

  return (
    <div className='px-10 w-full md:flex gap-4'>
      <div className='basis-3/4 justify-between'>
        <h2 className='text-2xl font-semibold m-2'>Cart</h2>
        {cartItems?.map(item => <CartItem key={item.id} item={item} />)}
      </div>
      <div className='shadow-md h-max mt-6 px-4 py-2 '>
        <h2 className='text-2xl font-semibold m-2'>Cart Summary</h2>
        <div className='flex justify-between gap-3'>
          <p>Subtotal:</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <button onClick={() => navigate('/checkout')} className='bg-red-600 w-full py-3 hover:bg-red-400 '>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
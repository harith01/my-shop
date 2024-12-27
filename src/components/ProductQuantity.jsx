import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity } from '../redux/cartSlice'

const ProductQuantity = ({ item }) => {
    const dispatch = useDispatch()


  return (
    <div className='flex gap-2 items-center justify-center'>
        <button 
          disabled={item.quantity === 1}  
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className='w-8 text-white text-2xl flex items-center justify-center rounded-sm bg-red-600 disabled:bg-red-400'>-</button>
        <p>{item.quantity}</p>
        <button 
        onClick={() => dispatch(increaseQuantity(item.id))}
        className='w-8 text-white text-2xl flex items-center justify-center rounded-sm bg-red-600'>+</button>
    </div>
  )
}

export default ProductQuantity
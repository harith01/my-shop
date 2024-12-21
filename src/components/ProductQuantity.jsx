import React from 'react'
import { useDispatch } from 'react-redux'
import { addQuantity } from '../redux/cartSlice'

const ProductQuantity = ({ item }) => {
    const dispatch = useDispatch()
  return (
    <div className='flex gap-2 items-center justify-center'>
        <button 
          className='w-8 text-white text-2xl flex items-center justify-center rounded-sm bg-red-600'>-</button>
        <p>{item.quantity}</p>
        <button 
        onClick={() => dispatch(addQuantity(item.id))}
        className='w-8 text-white text-2xl flex items-center justify-center rounded-sm bg-red-600'>+</button>
    </div>
  )
}

export default ProductQuantity
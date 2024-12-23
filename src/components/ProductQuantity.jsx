import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeItem } from '../redux/cartSlice'

const ProductQuantity = ({ item }) => {
    const dispatch = useDispatch()

    const handleDecreaseQuantity = () => {
      if (item.quantity === 0) {
        dispatch(removeItem(item))
      } else {
        dispatch(decreaseQuantity(item.id))
      }
    }
  return (
    <div className='flex gap-2 items-center justify-center'>
        <button 
          onClick={handleDecreaseQuantity}
          className='w-8 text-white text-2xl flex items-center justify-center rounded-sm bg-red-600'>-</button>
        <p>{item.quantity}</p>
        <button 
        onClick={() => dispatch(increaseQuantity(item.id))}
        className='w-8 text-white text-2xl flex items-center justify-center rounded-sm bg-red-600'>+</button>
    </div>
  )
}

export default ProductQuantity
import React from 'react'
import { FaDeleteLeft, FaTrash } from 'react-icons/fa6'
import ProductQuantity from './ProductQuantity'
import { removeItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className='w-full shadow-md mb-3 px-2 py-2'>
      <div className='flex mb-2 items-center justify-between'>
        <div className='flex  items-center basis-2/3 gap-3'>
          <div className='w-20 border rounded-lg border-red-700'>
            <img className='' src={item.thumbnail} alt='' />
          </div>
          <div className='basis-3/5'>
            <p>{item.title}</p>
          </div>
        </div>
        <div>
          <p>${item.totalPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <div onClick={() => dispatch(removeItem(item))} className='flex gap-2 items-center px-3 rounded-md text-red-600 hover:bg-red-300'>
          <FaTrash />
          <button>Remove</button>
        </div>
        <div className='flex gap-2 items-center text-red-600'>
          <ProductQuantity item={item} />
        </div>

      </div>
    </div>
  )
}

export default CartItem
import React from 'react'
import { FaDeleteLeft, FaTrash } from 'react-icons/fa6'

const CartItem = ({ item }) => {
  return (
    <div className='w-2/3'>
      <div className='flex bg-slate-200 mb-2 items-center justify-between'>
        <div className='flex  items-center basis-2/3 gap-3'>
          <div className='w-20 border-2 border-red-700'>
            <img className='s' src={item.thumbnail} alt='' />
          </div>
          <div className='basis-3/5'>
            <p>{item.title}</p>
          </div>
        </div>
        <div>
          <p>$ {item.price}</p>
        </div>
      </div>
      <div className='flex justify-between'>
        <div className='flex gap-2 items-center text-red-600 hover:bg-red-300'>
          <FaTrash />
          <button>Remove</button>
        </div>
        <div className='flex gap-2 items-center text-red-600 hover:bg-red-300'>
          <FaTrash />
          <button>Remove</button>
        </div>

      </div>
    </div>
  )
}

export default CartItem
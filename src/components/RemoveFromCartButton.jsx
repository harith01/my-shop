import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from '../redux/cartSlice'

const RemoveFromCartButton = ({ product }) => {
    const dispatch = useDispatch()
    return (
        <div
            className='md:bg-red-700 lg:bg-red-600 
             md:text-white group-hover:text-white 
             group-hover:py-2 w-full
             md:group-hover:bg-red-600
             bg-red-600 h-10
             mt-2
             flex items-center justify-center'
             onClick={() => dispatch(removeItem(product))}
        >
            <button  className='uppercase'>Remove From Cart</button>
        </div>
    )
}

export default RemoveFromCartButton
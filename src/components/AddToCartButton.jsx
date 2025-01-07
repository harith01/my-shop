import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'
const AddToCartButton = ({ product }) => {
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
        >
            <button onClick={() => dispatch(addItem(product))} className='uppercase'>Add to Cart</button>
        </div>
    )
}

export default AddToCartButton
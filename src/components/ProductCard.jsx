import React from 'react'
import { addItem } from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
  return (
    <div className='shadow-md px-5 py-2 rounded-md group'>
        <div>
            <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className='pt-1 text-gray-800'>
            <h3>{product.title.slice(0,20)}</h3>
        </div>
        <div className='font-semibold'>
            <p>$ {product.price}</p>
        </div>
        <div 
        className='md:bg-white 
         md:text-white group-hover:text-white 
         group-hover:py-2 w-full
         md:group-hover:bg-red-600
         bg-red-600 h-10
         mt-2
         flex items-center justify-center'
        >
            <button onClick={() => dispatch(addItem(product))} className='uppercase'>Add to Cart</button>
        </div>
    </div>
  )
}

export default ProductCard
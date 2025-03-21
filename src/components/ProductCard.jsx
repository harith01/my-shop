import React from 'react'
import { Link } from 'react-router-dom'
import AddToCartButton from './AddToCartButton'
import RemoveFromCartButton from './RemoveFromCartButton'
import { useSelector } from 'react-redux'


const ProductCard = ({ product }) => {
    const itemInCart = useSelector((state) => state.cart.items?.some(item => item?.id === product?.id))
    
    return (

        <div className='shadow-md px-5 py-2 rounded-md group'>
            <Link to={`/product/${product.id}`}>
                <div>
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <div className='pt-1 text-gray-800'>
                    <h3>{product.title.slice(0, 20)}</h3>
                </div>
                <div className='font-semibold'>
                    <p>$ {product.price}</p>
                </div>
            </Link>
            {itemInCart ? <RemoveFromCartButton product={product} /> : <AddToCartButton product={product} />}
        </div>

    )
}

export default ProductCard
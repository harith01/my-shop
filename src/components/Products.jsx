import React from 'react'
import ProductCard from './ProductCard'

const Products = ({ products }) => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10 py-4 gap-4 w-screen items-center justify-center'>
        {products?.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default Products
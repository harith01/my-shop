import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../redux/productsSlice'
import ProductCard from './ProductCard'

const Products = ({ products }) => {
    console.log(products.products)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10 py-4 gap-4 w-screen items-center justify-center'>
        {products?.products?.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default Products
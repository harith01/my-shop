import React from 'react'
import { selectFilteredProducts } from '../redux/productsSlice'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const FilteredProducts = () => {
    const filteredProducts = useSelector(selectFilteredProducts)
    console.log(FilteredProducts)
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-10 py-4 gap-4 w-screen items-center justify-center'>
        {filteredProducts?.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default FilteredProducts
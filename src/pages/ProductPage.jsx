import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/cartSlice'
import AddToCartButton from '../components/AddToCartButton'
import StarRating from '../components/StarRating'
import Review from '../components/Review'

const ProductPage = () => {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`https://dummyjson.com/products/${id}`)
      setProductDetail(response.data)
    }
    getProduct()
  }, [id])

  console.log(productDetail)

  return (
    <div className='px-10 mt-10 '>
      <h1 className='font-bold text-center text-2xl mb-10'>{productDetail?.title}</h1>
      <div className='flex justify-between flex-col md:flex-row gap-10 lg:gap-5'>
        <div className='flex-shrink-0'>
          <img className='h-96 border border-red-200 rounded-lg object-cover' src={productDetail?.thumbnail} />
        </div>
        <div className='mt-10 md:mt-0'>
          <p className='font-semibold mb-10'>{productDetail?.description}</p>
          <p>Brand: {productDetail?.brand}</p>
          <p>Category: {productDetail?.category}</p>
          <div className='flex justify-between'>
            <p className='font-semibold text-2xl'>Price: ${productDetail?.price}</p>
            <StarRating rating={productDetail?.rating} />
          </div>
          <AddToCartButton product={productDetail} />
          <div>
          {productDetail?.reviews.map(review => <Review review={review} />)}
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default ProductPage
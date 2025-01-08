import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addItem, selectCartItems } from '../redux/cartSlice'
import AddToCartButton from '../components/AddToCartButton'
import StarRating from '../components/StarRating'
import Review from '../components/Review'
import Spinner from '../components/Spinner'
import { useSelector } from 'react-redux'
import ProductQuantity from '../components/ProductQuantity'

const ProductPage = () => {
  const { id } = useParams()
  const [productDetail, setProductDetail] = useState()
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)

  const itemInCart = useSelector((state) => state.cart.items?.some(item => item?.id === productDetail?.id))
  console.log(itemInCart)

  useEffect(() => {
    async function getProduct() {
      const response = await axios.get(`https://dummyjson.com/products/${id}`)
      if (response) {
        setProductDetail(response.data)
        setLoading(false)
      }
    }
    getProduct()
  }, [id])

  if (loading) {
    return <div className='h-screen flex items-center justify-center'>
      <Spinner />
    </div>
  }

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
          <div className='w-1/3 mt-5'>
            {itemInCart ? <ProductQuantity item={cartItems.find(item => item.id === productDetail.id)} /> : <AddToCartButton product={productDetail} />}
          </div>
          <div>
            {productDetail?.reviews.map((review, index) => <Review key={index} review={review} />)}
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductPage
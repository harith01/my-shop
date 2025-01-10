import React from 'react'
import { useSelector } from 'react-redux'
import { selectTotalPrice } from '../redux/cartSlice'
import { Link } from 'react-router-dom'

const OrderConfirmation = ({order}) => {
  return (
    <div className='px-10 py-5'>
        <h1 className='text-2xl font-extrabold text-center mb-10'>Thank you for placing your order</h1>
        <p className='font-semibold mb-3'>Your order has been placed successfully</p>
        <div className='shadow-md mt-3 px-4 py-3'>
          <h3 className='font-bold'>Order Summary</h3>
          <p>Order Id: {order.orderId}</p>
          <div className='mt-3'>
            <h4 className='font-semibold'>Shipping Information</h4>
            <p>{order.shippingInformation.address}</p>
            <p>{order.shippingInformation.city}</p>
            <p>{order.shippingInformation.zip}</p>
          </div>
          <div className='mt-3'>
            <h4 className='font-semibold'>Products Ordered</h4>
            {order.products.map(product => (
              <div className='flex justify-between'>
                <p>{product.title} (x{product.quantity})</p>
                <p>$ {product.totalPrice.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className='flex justify-between mt-3'>
            <p>Total Price:</p>
            <p className='font-semibold'>$ {useSelector(selectTotalPrice).toFixed()}</p>
          </div>
        </div>
        <div className='mt-4'>
          <button className='mr-4 bg-red-600 px-4 py-2 text-white'>Track Order</button>
          <Link to={'/home'}><button className='mr-4 bg-blue-600 px-4 py-2 text-white'>Continue Shopping</button></Link>
        </div>
    </div>
  )
}

export default OrderConfirmation
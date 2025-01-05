import React, { useState } from 'react'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { selectCartItems, selectTotalPrice } from '../redux/cartSlice'
import { useNavigate } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'

const Checkout = ({setOrder}) => {
  const [showbilling, setShowBilling] = useState(false)
  const [showshipping, setShowShipping] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState('pod')
  const [shippingInfo, setShippingInfo] = useState({
    address: '',
    city: '',
    zip: ''
  })
  const cartItems = useSelector(selectCartItems)
  const totalPrice = useSelector(selectTotalPrice)
  const navigate = useNavigate()

  const handlePlaceOrder = () => {
    const newOrder = {
      products: cartItems,
      orderNumber: nanoid(5),
      shippingInformation: shippingInfo,
      totalPrice: totalPrice
    }
    setOrder(newOrder)
    navigate('/order-confirmation')
  }

  return (
    <div className='flex px-10'>
      <div className='basis-4/6'>
        <h2 className='text-2xl font-semibold m-2'>Checkout</h2>
        <div className='flex flex-col md:flex-row justify-between space-x-10 mt-8'>
          <div className='md:w-2/3'>
            <div className='border p-2 mb-6'>
              <div onClick={() => setShowBilling(!showbilling)} className='flex justify-between items-center'>
                <h3 className='text-lg font-semibold mb-2'>Billing Information</h3>
                {showbilling ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`${showbilling && 'hidden'} space-y-4`}>
                <div>
                  <label className='block text-gray-700' htmlFor="">Name</label>
                  <input
                    type="text"
                    placeholder='Enter name'
                    name='name'
                    className='w-full px-3 py-2 border'
                  />
                </div>
                <div>
                  <label className='block text-gray-700' htmlFor="">Email</label>
                  <input
                    type="email"
                    placeholder='Enter e-mail'
                    name='email'
                    className='w-full px-3 py-2 border'
                  />
                </div>
                <div>
                  <label className='block text-gray-700' htmlFor="">Phone Number</label>
                  <input
                    type="text"
                    placeholder='Enter phone number'
                    name='phone'
                    className='w-full px-3 py-2 border'
                  />
                </div>
              </div>

            </div>
            <div className='border p-2 mb-6'>
              <div onClick={() => setShowShipping(!showshipping)} className='flex justify-between items-center'>
                <h3 className='text-lg font-semibold mb-2'>Shipping Information</h3>
                {showshipping ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`${showshipping && 'hidden'} space-y-4`}>
                <div>
                  <label className='block text-gray-700' htmlFor="">Address</label>
                  <input
                    type="text"
                    placeholder='Enter address'
                    name='address'
                    className='w-full px-3 py-2 border'
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                  />
                </div>
                <div>
                  <label className='block text-gray-700' htmlFor="">City</label>
                  <input
                    type="text"
                    placeholder='Enter city'
                    name='city'
                    className='w-full px-3 py-2 border'
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}

                  />
                </div>
                <div>
                  <label className='block text-gray-700' htmlFor="">Zip code</label>
                  <input
                    type="text"
                    placeholder='Enter zip code'
                    name='zip'
                    className='w-full px-3 py-2 border'
                    value={shippingInfo.zip}
                    onChange={(e) => setShippingInfo({...shippingInfo, zip: e.target.value})}

                  />
                </div>
              </div>

            </div>
            <div className='border p-2 mb-6'>
              <div onClick={() => setShowPayment(!showPayment)} className='flex justify-between items-center'>
                <h3 className='text-lg font-semibold mb-2'>Payment Method</h3>
                {showshipping ? <FaAngleDown /> : <FaAngleUp />}
              </div>
              <div className={`${showPayment && 'hidden'} space-y-4`}>
                <div className='flex items-center mb-2 gap-2'>
                  <input
                    type="radio"
                    name='payment'
                    checked={paymentMethod === 'pod'}
                    onChange={() => setPaymentMethod('pod')}
                  />
                  <label className='block text-gray-700' htmlFor="">Pay on Delivery</label>
                </div>
                <div className='flex items-center mb-2 gap-2'>
                  <input
                    type="radio"
                    name='payment'
                    checked={paymentMethod === 'dc'}
                    onChange={() => setPaymentMethod('dc')}
                  />
                  <label className='block text-gray-700' htmlFor="">Debit Card</label>
                </div>
                {paymentMethod === 'dc' && (
                  <div className='bg-gray-200 px-2 py-3'>
                    <h3>Card Details</h3>
                    <div className='mb-4'>
                      <label className='block text-gray-700 font-semibold mb-2' htmlFor="">Card Number</label>
                      <input type='text' placeholder='Enter card number' className='border p-2 w-full rounded' />
                    </div>
                    <div className='mb-4'>
                      <label className='block text-gray-700 font-semibold mb-2' htmlFor="">Card Holder's Name</label>
                      <input type='text' placeholder='Enter name' className='border p-2 w-full rounded' />
                    </div>
                    <div className='flex md:flex-row flex-col justify-between mb-2'>
                      <div className='md:w-1/2 ml-2'>
                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Expiry Date:</label>
                        <input type='date' placeholder='MM/YY' className='border p-2 w-full rounded' />
                      </div>
                      <div className='md:w-1/2 ml-2'>
                        <label htmlFor="" className='block text-gray-700 font-semibold mb-2'>Card Holder's Name</label>
                        <input type='text' placeholder='Enter CVV' className='border p-2 w-full rounded' />
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </div>
      <div className=' '>
        <h1>Order Summary</h1>
        <div className=''>
          {cartItems.map(item => (
            <div className='flex items-center'>
              <div className='w-36'>
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className='w-32'>
              <h4>{item.title}</h4>
              <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <div className=' w-15'>
                $ {item.totalPrice.toFixed(2)}
              </div>
            </div>
          ))}
          <div>
            <div>
              <span>Total Price: ${totalPrice}</span>
            </div>
            <div>
              <button 
               className='py-2 px-1 w-full bg-red-600 text-white mt-2 rounded-sm hover:bg-red-400'
               onClick={() => handlePlaceOrder()}
               >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
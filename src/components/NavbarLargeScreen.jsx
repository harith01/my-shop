import React from 'react'
import { FaArrowDown, FaCaretDown, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { totalQuantity } from '../redux/cartSlice'


const NavbarLargeScreen = () => {
    const cartItemsQuantity = useSelector(totalQuantity)
  return (
    <nav className='w-screen flex items-center justify-between px-10 py-4 shadow-md'>
        <div>
            <Link to='/'>
            <p className='text-lg'>My<span className='text-red-700'>SHOP</span></p>
            </Link>
        </div>
        <div className=''>
            <form className=' relative flex items-center justify-between gap-2' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="" className='flex items-center'>
                    <FaSearch className='absolute ml-1 px-1 text-2xl' />
                    <input 
                                type='text'
                                placeholder='Search a product'
                                className='px-8 py-2 rounded-3xl border'
                    />
                </label>
                <button className='uppercase bg-red-600 text-white px-4 py-1 rounded-2xl hover:bg-red-500 text-lg'>Search</button>
            </form>
        </div>
        <div className='flex items-center justify-between'>
            <div className='flex text-lg items-center'>
                <Link to='/'>
                <button className='flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-2xl hover:text-red-600'>
                    <FaUser />
                    <div>Account</div>
                    <FaCaretDown />
                </button>
                </Link>
            </div>
            <div className=''>
                <Link to='/cart'>
                <button className='flex items-center relative gap-6 px-4 py-2  hover:text-red-600 hover:bg-gray-50 text-2xl'>
                    <div className=''>
                        <FaShoppingCart />
                        <span className='absolute text-white top-0 flex items-center justify-center left-10 text-sm bg-red-600 rounded-full w-4 h-4'>{cartItemsQuantity}</span>
                    </div>
                    <div>Cart</div>
                </button>
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default NavbarLargeScreen
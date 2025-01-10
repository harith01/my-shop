import React, { useState } from 'react'
import { FaBars, FaSearch, FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { productsFiltered } from '../redux/productsSlice'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userLoggedOut } from '../redux/authSlice'
import { totalQuantity } from '../redux/cartSlice'

const NavbarMobile = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const username = useSelector(state => state.auth.username)
    const cartItemsQuantity = useSelector(totalQuantity)

    const handleChange = (e) => {
        setSearch(e.target.value)
        dispatch(productsFiltered(search))
        navigate('/filtered-products')
    }
    return (
        <nav className='py-2 px-3 flex flex-col gap-3 shadow-md'>
            <div className='flex justify-between items-center'>
                <Link to={'/home'}>
                    <div className='flex items-center gap-3'>
                        <p className='text-lg'>My<span className='text-red-700'>SHOP</span></p>
                    </div>
                </Link>
                <div className='flex items-center  gap-3'>
                    <div className='flex items-center gap-2'>
                        <FaUser />
                        <p>{username}</p>
                        <button onClick={() => dispatch(userLoggedOut())} className='bg-red-300 px-2'>Logout</button>
                    </div>
                    <Link to={'/cart'}>
                        <div className='relative flex gap-1'>
                            <FaCartShopping />
                            <div className='bg-red-600 text-white w-5 h-5 flex items-center justify-center rounded-full ml-1'>{cartItemsQuantity}</div>
                        </div>
                    </Link>
                </div>
            </div>
            <form className=' relative' onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="" className='flex items-center'>
                    <FaSearch className='absolute ml-1 px-1 text-2xl' />
                    <input
                        type='text'
                        placeholder='Search a product'
                        className='w-full px-8 py-2 rounded-3xl border'
                        value={search}
                        onChange={handleChange}
                    />
                </label>
            </form>
        </nav>
    )
}

export default NavbarMobile
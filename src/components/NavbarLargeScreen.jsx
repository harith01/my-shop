import React, { useState } from 'react'
import { FaArrowDown, FaCaretDown, FaSearch, FaShoppingCart, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { totalQuantity } from '../redux/cartSlice'
import { userLoggedOut } from '../redux/authSlice'
import { useDispatch } from 'react-redux'
import { productsFiltered } from '../redux/productsSlice'
import { useNavigate } from 'react-router-dom'



const NavbarLargeScreen = () => {
    const [search, setSearch] = useState('')
    const cartItemsQuantity = useSelector(totalQuantity)
    const username = useSelector(state => state.auth.username)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value)
        dispatch(productsFiltered(search))
        navigate('/filtered-products')
    }
    
    return (
        <nav className='w-screen flex items-center justify-between px-10 py-4 shadow-md'>
            <div className='font-bold text-4xl'>
                <Link to='/home'>
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
                            value={search}
                            onChange={handleChange}
                        />
                    </label>
                    <button className='uppercase bg-red-600 text-white px-4 py-1 rounded-2xl hover:bg-red-500 text-lg'>Search</button>
                </form>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex text-lg items-center'>

                    <button className='flex items-center gap-2 px-4 py-2  text-2xl '>
                        <FaUser />
                        <div>{username ? username : 'User'}</div>
                    </button>

                </div>
                <div className='flex text-lg items-center'>

                    <button onClick={() => dispatch(userLoggedOut())}
                        className='flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-2xl hover:text-red-600'>
                        <FaSignOutAlt />
                        <div>LogOut</div>
                    </button>

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
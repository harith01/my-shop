import React, { useState } from 'react'
import { FaBars, FaSearch, FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { productsFiltered } from '../redux/productsSlice'
import { useNavigate } from 'react-router-dom'


const NavbarMobile = () => {
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSearch(e.target.value)
        dispatch(productsFiltered(search))
        navigate('/filtered-products')
    }
  return (
    <nav className='py-2 px-3 flex flex-col gap-3 shadow-md'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <FaBars />
                <p className='text-lg'>My<span className='text-red-700'>SHOP</span></p>
            </div>
            <div className='flex items-center  gap-3'>
                <div className=''>
                <FaUser />
                </div>
                <div>
                    <FaCartShopping />
                </div>
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
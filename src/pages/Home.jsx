import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../redux/productsSlice'
import Products from '../components/Products'
import Spinner from '../components/Spinner'

const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.products.data)
    const status = useSelector(state => state.products.status)
    const error = useSelector(state => state.products.error)


    useEffect(() => {
        if (status === 'idle') {
          dispatch(fetchProducts());
        }
      }, [status, dispatch]);

    if (status === 'loading') return <div className='h-screen flex justify-center items-center'><Spinner /></div>
  return (
    <div>
      <Products products={data} />
    </div>
  )
}

export default Home
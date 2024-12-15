import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProducts } from '../redux/productsSlice'

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

    console.log(data)

  return (
    <div>Home</div>
  )
}

export default Home
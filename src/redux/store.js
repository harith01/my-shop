import productReducer from './productsSlice'
import cartReducer from './cartSlice'
import { configureStore } from '@reduxjs/toolkit'


const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    }
})

export default store
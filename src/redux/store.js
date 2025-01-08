import productReducer from './productsSlice'
import cartReducer from './cartSlice'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import userReducer from './userSlice'


const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        auth: authReducer,
        users: userReducer
    }
})

export default store
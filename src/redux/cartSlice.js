import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    thumbnail: newItem.thumbnail,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price
            }
            state.totalPrice += newItem.price;
            state.totalQuantity++;
        },

        removeItem: (state, action) => {
            const removedItem = action.payload;
            const existingItem = state.items.find(item => item.id === removedItem.id)
            if (existingItem) {
                state.totalPrice -= existingItem.totalPrice
                state.totalQuantity -= existingItem.quantity
                state.items = state.items.filter(item => item.id !== removedItem.id)
            }
        },

        increaseQuantity: (state, action) => {
            const id = action.payload
            const itemToIncrease = state.items.find(item => item.id === id)
            itemToIncrease.quantity++
            itemToIncrease.totalPrice += itemToIncrease.price
            state.totalQuantity++
            state.totalPrice += itemToIncrease.price
        },

        decreaseQuantity: (state, action) => {
            const id = action.payload
            const itemToDecrease = state.items.find(item => item.id === id)
            itemToDecrease.quantity--
            itemToDecrease.totalPrice -= itemToDecrease.price
            state.totalQuantity--
            state.totalPrice -= itemToDecrease.price
        },
    
    }
})

export default cartSlice.reducer
export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions
export const selectCartItems = state => state.cart.items
export const totalQuantity = state => state.cart.totalQuantity
export const selectTotalPrice = state => state.cart.totalPrice

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data: [],
    status: 'idle',
    error: null,
    filteredData: [],
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await axios.get('https://dummyjson.com/products')
    console.log(response.data.products)
    return response.data.products
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        productsFiltered: (state, action) => {
            const searchTerm = action.payload;
            if (searchTerm.trim() === '') {
                state.filteredData = state.data
            } else {
                state.filteredData = state.data.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
            }
            console.log(state.filteredData)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
                state.filteredData = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
    }
})

export default productsSlice.reducer
export const selectAllProducts = (state) => state.products.data
export const selectFilteredProducts = (state) => state.products.filteredData
export const { productsFiltered } = productsSlice.actions
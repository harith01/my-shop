import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        username: 'harith',
        email: 'harithy@ymail.com',
        password: 'harith',
    },
    {
        username: 'jamila',
        email: 'jamy@ymail.com',
        password: 'jammy'
    }
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        removeUser: (state, action) => {
            return state.filter(user => user.email !== action.payload)
        }
    }
})

export default userSlice.reducer
export const { addUser, removeUser } = userSlice.actions
export const selectAllUsers = state => state.users
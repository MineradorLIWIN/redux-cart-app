import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        setCart: (state, action) => {
            state.cartItems = action.payload
        },
        addToCart: (state, action) => {
            const item = action.payload
            const existingItem = state.cartItems.find((i) => i.id === item.id)
            if (!existingItem) {
                state.cartItems.push(item)
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload)
        },
        updateQuantity: (state, action) => {
            const item = state.cartItems.find((i) => i.id === action.payload.id)
            if (item) {
                item.quantity += action.payload.quantity
            }
        }
    }
})
export const {setCart, addToCart, removeFromCart, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
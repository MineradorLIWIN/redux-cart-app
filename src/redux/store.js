import { configureStore } from "@reduxjs/toolkit"
import searchReducer from '../redux/slices/searchSlice'
import productReducer from "./slices/productsSlice"
import cartReducer from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        search: searchReducer,
        products: productReducer,
        cart: cartReducer
    }
})
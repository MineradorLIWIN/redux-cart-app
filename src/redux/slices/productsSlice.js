import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'fetchProducts',
    async () => {
        const response = await fetch('https://dummyjson.com/products?limit=194')
        const data = await response.json()
        return data.products
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        loading: true,
        items: [],
        error: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
                state.error = ''
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false
                state.items = []
                state.error = action.error.message
            })
    }
})
export default productsSlice.reducer
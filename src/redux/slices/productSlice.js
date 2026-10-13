import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {

    const res = await axios.get('https://dummyjson.com/products')

    localStorage.setItem("allproducts",JSON.stringify(res.data.products))

    console.log(res);
    

return res.data.products 

})
const productSlice = createSlice({
    name: 'products',
    initialState: {
        loading: false,
        products: [],
        error: '',
        dummyProducts:[]

    },
    reducers: {

        searchProducts:(state,action)=>{
            state.products=state.dummyProducts.filter(pro=>pro.title.toLowerCase().includes(action.payload.toLowerCase()))
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state,action)=>{
            state.loading=true
            state.products=[]
            state.dummyProducts=[]
            state.error=''

        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false
            state.products=action.payload
            state.dummyProducts=action.payload
            state.error=''

        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false
            state.products=[]
            state.dummyProducts=[]
            state.error='api call failed'

        })
    }
})
export const {searchProducts}=productSlice.actions
export default productSlice.reducer
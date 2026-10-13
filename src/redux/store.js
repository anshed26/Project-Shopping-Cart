import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slices/productSlice'
import wishlistReducer from './slices/wishlistSlice'
import cartReducer from './slices/cartSlice'


const store=configureStore({
    reducer:{
        products:productReducer,
        wishlist:wishlistReducer,
        cart:cartReducer
    }
})


export default store


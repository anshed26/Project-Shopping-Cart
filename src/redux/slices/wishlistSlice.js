import { createSlice } from "@reduxjs/toolkit";

const wishListSlice=createSlice({

    name:'wishlist',
    initialState:[],
    reducers:{
        addToWishlist:(state,action)=>{

            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
          return state.filter(pro=>pro.id!=action.payload)
        }
    }
})

export const {addToWishlist,removeFromWishlist}=wishListSlice.actions
export default wishListSlice.reducer
import {createSlice} from "@reduxjs/toolkit"

const initailState = { products : [{id:1, name:"iPhone"}, {id:2, name:"samsung"}]}

export const productReducer = createSlice({
     name : "product",
     initialState:initailState,
     reducers:{
        //actions
        createProduct : (state, action)=>{
            state.products.save(action.payload)
        }

     }
})

export default productReducer.reducer
export const {createProduct} = productReducer.actions
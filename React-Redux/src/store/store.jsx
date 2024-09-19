import {configureStore} from "@reduxjs/toolkit"
import UserReducer from "./reducers/UserReducer"
import  productReducer  from "./reducers/productReducer"

export const store = configureStore({
  reducer : {
    UserReducer : UserReducer,
    productReducer : productReducer
  }
})
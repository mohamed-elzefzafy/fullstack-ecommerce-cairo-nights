
import { cartreducer } from "./slices/cartSlice";
import { productReducer } from "./slices/productSlice";

const { configureStore } = require("@reduxjs/toolkit");


const store = configureStore({
  reducer : {
 product : productReducer ,
 cart :cartreducer,
  }
})



export default store;
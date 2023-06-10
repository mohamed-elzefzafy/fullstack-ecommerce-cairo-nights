const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
  name : "cart" ,
  initialState : {
    cartItems : localStorage.getItem("cartItems") !== null? JSON.parse(localStorage.getItem("cartItems")) : []
  },
  reducers : {
    addItemToCart(state , action) {
      const newItem = action.payload;
      const itemIsExistInCart = state.cartItems.find((item) => item.id === newItem.id)

      if(itemIsExistInCart) {
        // newItem.quantity += 1
        state.cartItems = state.cartItems.map(item => item.id === newItem.id ? newItem : item) 
        localStorage.setItem("cartItems" , JSON.stringify(state.cartItems));
      } else {
        // const finalItem = {...newItem , quantity : 1 }
      state.cartItems = [...state.cartItems , newItem]
      localStorage.setItem("cartItems" , JSON.stringify(state.cartItems));
      }

      
    } ,
    removeItemFromCart(state , action) {
    const newCartItems =  state.cartItems.filter((item) => item.id !== action.payload.id);
    state.cartItems = newCartItems;
    localStorage.setItem("cartItems" , JSON.stringify(state.cartItems));
    }
  }
})


const  cartActions = cartSlice.actions;
const  cartreducer = cartSlice.reducer;

export {cartActions , cartreducer};
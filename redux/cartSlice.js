import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addToCart: (state, action) => {
            console.log(state.cartItems);
            console.log(action.payload.item);
            state.cartItems.push(action.payload.item);
            console.log(state.cartItems);
        }
    }
})

const cartReducer = cartSlice.reducer;
export const addToCart = cartSlice.actions.addToCart;

export default cartReducer;
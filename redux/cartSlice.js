import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartConfirmActive: false
    },
    reducers: {
        addToCart: (state, action) => {
            let addedProduct = action.payload.item;
            let addedProductsIndex = state.cartItems.findIndex((item) => item.id === addedProduct.id);
            let quantityNumber = action.payload.quantityNumber
          
            if (addedProductsIndex !== -1) {
                state.cartItems[addedProductsIndex].quantity += quantityNumber;
            } else {
                let newProduct = {
                    ...addedProduct,
                    quantity: quantityNumber
                }
                state.cartItems.push(newProduct);
            }
        },
        
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
        },

        clearCart: (state) => {
            state.cartItems = [];
        },

        toggleCartConfirm: (state) => {
            state.cartConfirmActive = !state.cartConfirmActive;
        }
    }
})

const cartReducer = cartSlice.reducer;
export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const toggleCartConfirm = cartSlice.actions.toggleCartConfirm;
export const clearCart = cartSlice.actions.clearCart;

export default cartReducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
        cartConfirmActive: false,
        cartTotal: 0,
        cartTotalQuantity: 0
    },
    reducers: {
        addToCart: (state, action) => {
            let addedProduct = action.payload.item;
            let addedProductsIndex = state.cartItems.findIndex((item) => item.id === addedProduct.id);
            let quantityNumber = action.payload.quantityNumber
          
            if (addedProductsIndex !== -1 && addedProduct.selectedColor=== state.cartItems[addedProductsIndex].selectedColor) {
                state.cartItems[addedProductsIndex].quantity += quantityNumber;
            } else {
                let newProduct = {
                    ...addedProduct,
                    quantity: quantityNumber
                }
                state.cartItems.push(newProduct); 
            }

            state.cartTotal += addedProduct.price * quantityNumber;
            state.cartTotalQuantity += quantityNumber;

        },
        
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => !(item.id === action.payload.item.id && item.selectedColor === action.payload.item.selectedColor));
            state.cartTotal -= action.payload.item.price * action.payload.item.quantity;
            state.cartTotalQuantity -= action.payload.item.quantity;
        },

        clearCart: (state) => {
            state.cartItems = [];
            state.cartTotal = 0
        },

        toggleCartConfirm: (state) => {
            state.cartConfirmActive = !state.cartConfirmActive;
            state.cartTotalQuantity = 0;
        },

        calculateCoupon: (state) => {
            state.cartTotal = state.cartTotal * 0.8;
        }
    }
})

const cartReducer = cartSlice.reducer;
export const addToCart = cartSlice.actions.addToCart;
export const removeFromCart = cartSlice.actions.removeFromCart;
export const toggleCartConfirm = cartSlice.actions.toggleCartConfirm;
export const clearCart = cartSlice.actions.clearCart;
export const calculateCoupon = cartSlice.actions.calculateCoupon;

export default cartReducer;
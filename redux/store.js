import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        searchActions: searchReducer,
        productsActions: productsReducer,
        cartActions: cartReducer
    }
})

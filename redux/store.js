import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import productsReducer from "./productsSlice";
import cartReducer from "./cartSlice";
import profileReducer from "./profileSlice";

export const store = configureStore({
    reducer: {
        searchActions: searchReducer,
        productsActions: productsReducer,
        cartActions: cartReducer,
        profileActions: profileReducer
    }
})

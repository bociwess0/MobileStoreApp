import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import productsReducer from "./productsSlice";

export const store = configureStore({
    reducer: {
        searchActions: searchReducer,
        productsActions: productsReducer
    }
})

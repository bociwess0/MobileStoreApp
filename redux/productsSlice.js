import { createSlice } from "@reduxjs/toolkit";
import { allProducts } from "../components/ProductList/AllProducts";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: allProducts
    }
})

const productsReducer = productsSlice.reducer;

export default productsReducer;
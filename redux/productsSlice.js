import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: []
    },
    reducers: {
        importProcuctsFromDatabase: (state, action) => {
            state.products = action.payload.products;
        },
        rateProduct: (state, action) => {

            let foundProductIndex = state.products.findIndex((product) => product.id === action.payload.productId);

            if(foundProductIndex !== -1) {

                state.products[foundProductIndex].ratings.push({user: action.payload.userEmail, rating: action.payload.rating})
            }

        },
        calculateAvgRating: (state, action) => {
            
            let sum = 0;

            let foundProductIndex = state.products.findIndex((product) => product.id === action.payload.product.id);

            if(foundProductIndex !== -1) {
                for(let rating of state.products[foundProductIndex].ratings) {
                    sum += rating;
                }

                state.products[foundProductIndex].avgRating = sum / state.products[foundProductIndex].ratings.length;

            }

        }
    }
})

const productsReducer = productsSlice.reducer;

export const importProcuctsFromDatabase = productsSlice.actions.importProcuctsFromDatabase;
export const rateProduct = productsSlice.actions.rateProduct;
export const calculateAvgRating = productsSlice.actions.calculateAvgRating;


export default productsReducer;
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

            let foundProductIndex = state.products.findIndex((product) => product.productKey === action.payload.productKey);

            if(foundProductIndex !== -1) {

                state.products[foundProductIndex].product.ratings.push(action.payload.rating)
            }

        },
        calculateAvgRating: (state, action) => {
            
            let sum = 0;

            let foundProductIndex = state.products.findIndex((product) => product.productKey === action.payload.productKey);

            if(foundProductIndex !== -1) {
                for(let rating of state.products[foundProductIndex].product.ratings) {
                    sum += rating;
                }

                const newAvg = sum / state.products[foundProductIndex].product.ratings.length;
                state.products[foundProductIndex].product.avgRating = parseFloat(newAvg.toFixed(2));

            }

            console.log(state.products[foundProductIndex].product.avgRating);

        }
    }
})

const productsReducer = productsSlice.reducer;

export const importProcuctsFromDatabase = productsSlice.actions.importProcuctsFromDatabase;
export const rateProduct = productsSlice.actions.rateProduct;
export const calculateAvgRating = productsSlice.actions.calculateAvgRating;


export default productsReducer;
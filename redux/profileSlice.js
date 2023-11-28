import { createSlice } from "@reduxjs/toolkit";
import { allUsers } from "../components/Profile/Users";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        users: allUsers,
        userLoggedIn: false,
        loggedUser: {},
        favoriteProducts: []
    },
    reducers: {
        logIn: (state) => {
            state.userLoggedIn = true;
        },
        logOut: (state) => {
            state.userLoggedIn = false;
            state.loggedUser = {};
        },
        registerUser: (state, action) => {
            state.users.push(action.payload.user);
            state.userLoggedIn = true;
        },
        loginUser: (state, action) => {
            state.loggedUser = state.users.find((user) => user.email === action.payload.user.email);
        },
        addToFavorites: (state, action) => {
            state.favoriteProducts.push(action.payload.product)
        },
        removeFromFavorites: (state, action) => {
            state.favoriteProducts = state.favoriteProducts.filter((item) => item.id !== action.payload.item.id);
        }
    }
})

const profileReducer = profileSlice.reducer;

export const logIn = profileSlice.actions.logIn;
export const logOut = profileSlice.actions.logOut;
export const registerUser = profileSlice.actions.registerUser;
export const loginUser = profileSlice.actions.loginUser;
export const addToFavorites = profileSlice.actions.addToFavorites;
export const removeFromFavorites = profileSlice.actions.removeFromFavorites;

export default profileReducer;
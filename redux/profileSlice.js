import { createSlice } from "@reduxjs/toolkit";
import { allUsers } from "../components/Profile/Users";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        users: [],
        userLoggedIn: false,
        loggedUser: {},
        favoriteProducts: []
    },
    reducers: {
        importUsers: (state, action) => {
            state.users = action.payload.users;
        },
        logIn: (state) => {
            state.userLoggedIn = true;
        },
        logOut: (state) => {
            state.userLoggedIn = false;
            state.loggedUser = {};
            state.favoriteProducts = [];
        },
        registerUser: (state, action) => {
            console.log(action.payload.user);
            state.users.push(action.payload.user);
        },
        loginUser: (state, action) => {
            state.loggedUser = state.users.find((user) => user.user.email === action.payload.user.email);
        },
        addToFavorites: (state, action) => {
            state.favoriteProducts.push(action.payload.product)
        },
        removeFromFavorites: (state, action) => {
            state.favoriteProducts = state.favoriteProducts.filter((item) => item.id !== action.payload.item.id);
        },
        updateLoggedUser: (state, action) => {
            state.loggedUser.firstName = action.payload.user.firstName;
            state.loggedUser.lastName = action.payload.user.lastName;
            state.loggedUser.email = action.payload.user.email;
            state.loggedUser.password = action.payload.user.password;
            state.loggedUser.address = action.payload.user.address;
            state.loggedUser.city = action.payload.user.city;

            const newUser = state.loggedUser;

            const foundedUserIndex = state.users.findIndex((user) => user.email === newUser.email);

            if(foundedUserIndex !== -1) {
                state.users[foundedUserIndex] = newUser;
            }

        },
        updateUser: (state, action) => {

            const newUser = action.payload.user;
            
            const foundedUserIndex = state.users.findIndex((user) => user.user.email === newUser.email);

            if(foundedUserIndex !== -1) {
                state.users[foundedUserIndex].user = newUser;
            }

        },
    }
})

const profileReducer = profileSlice.reducer;

export const importUsers = profileSlice.actions.importUsers;
export const logIn = profileSlice.actions.logIn;
export const logOut = profileSlice.actions.logOut;
export const registerUser = profileSlice.actions.registerUser;
export const loginUser = profileSlice.actions.loginUser;
export const updateLoggedUser = profileSlice.actions.updateLoggedUser;
export const updateUser = profileSlice.actions.updateUser;
export const addToFavorites = profileSlice.actions.addToFavorites;
export const removeFromFavorites = profileSlice.actions.removeFromFavorites;

export default profileReducer;
import { createSlice } from "@reduxjs/toolkit";
import { allUsers } from "../components/Profile/Users";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        users: allUsers,
        userLoggedIn: false,
        loggedUser: {}
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
        }
    }
})

const profileReducer = profileSlice.reducer;

export const logIn = profileSlice.actions.logIn;
export const logOut = profileSlice.actions.logOut;
export const registerUser = profileSlice.actions.registerUser;
export const loginUser = profileSlice.actions.loginUser;

export default profileReducer;
import { createSlice } from "@reduxjs/toolkit";
import { allUsers } from "../components/Profile/Users";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        users: allUsers,
        userLoggedIn: false
    },
    reducers: {
        logIn: (state) => {
            state.userLoggedIn = true;
        },
        logOut: (state) => {
            state.userLoggedIn = false;
        },
        registerUser: (state, action) => {
            state.users.push(action.payload.user);
            state.userLoggedIn = true;
        }
    }
})

const profileReducer = profileSlice.reducer;

export const logIn = profileSlice.actions.logIn;
export const logOut = profileSlice.actions.logOut;
export const registerUser = profileSlice.actions.registerUser;

export default profileReducer;
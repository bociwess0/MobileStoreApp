import { createSlice } from "@reduxjs/toolkit";


const profileSlice = createSlice({
    name: "profile",
    initialState: {
        users: [],
        userLoggedIn: false
    },
    reducers: {
        logOut: (state) => {
            state.userLoggedIn = false;
        },
        logInUser: (state, action) => {
            state.users.push(action.payload.user);
            state.userLoggedIn = true;
        }
    }
})

const profileReducer = profileSlice.reducer;

export const logOut = profileSlice.actions.logOut;
export const logInUser = profileSlice.actions.logInUser;

export default profileReducer;
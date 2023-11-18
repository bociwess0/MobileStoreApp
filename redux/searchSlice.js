import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchActive: false
    },
    reducers: {
        showSearchModal: (state) => {
            state.searchActive = true;
        },
        hideSearchModal: (state) => {
            state.searchActive = false;
        }
    }
})

const searchReducer = searchSlice.reducer;

export const showSearch = searchSlice.actions.showSearchModal;
export const hideSearch = searchSlice.actions.hideSearchModal;
export default searchReducer;
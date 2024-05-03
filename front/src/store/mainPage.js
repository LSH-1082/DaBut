import { createSlice } from '@reduxjs/toolkit';

export const mainPageSlice = createSlice({
    name: "mainPage",
    initialState: {
        mainPage: "mainPage",
    },
    reducers: {
        setMainPage(state, action) {
            state.mainPage = action.payload;
        }
    },
});

export const {setMainPage} = mainPageSlice.actions;

export default mainPageSlice.reducer;
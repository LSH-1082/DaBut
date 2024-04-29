import { createSlice } from '@reduxjs/toolkit';

export const pageSlice = createSlice({
    name: "page",
    initialState: {
        page: 1,
    },
    reducers: {
        incPage: (state, action) => {
            state.page += 1;
        },
    },
});

export const {incPage} = pageSlice.actions;

export default pageSlice.reducer;
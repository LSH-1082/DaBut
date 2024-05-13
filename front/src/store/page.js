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
        setPage: (state, action) => {
            state.page = action.payload;
        },
    },
});

export const {incPage, setPage} = pageSlice.actions;

export default pageSlice.reducer;
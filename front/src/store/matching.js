import { createSlice } from '@reduxjs/toolkit';

export const matchingSlice = createSlice({
    name: "matching",
    initialState: {
        user: [],
        index: 0,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setIndex: (state, action) => {
            state.index = action.payload;
        },
    },
});

export const {setUser, setIndex} = matchingSlice.actions

export default matchingSlice.reducer;
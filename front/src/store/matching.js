import { createSlice } from '@reduxjs/toolkit';

export const matchingSlice = createSlice({
    name: "matching",
    initialState: {
        user: {},
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const {setUser} = matchingSlice.actions

export default matchingSlice.reducer;
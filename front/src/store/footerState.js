import { createSlice } from '@reduxjs/toolkit';

export const footerStateSlice = createSlice({
    name: "footerState",
    initialState: {
        footerState: "",
        userDTO: {},
    },
    reducers: {
        setFooterState(state, action) {
            state.footerState = action.payload;
        },
        setUserDTO(state, action) {
            state.userDTO = action.payload;
        }
    },
});

export const {setFooterState, setUserDTO} = footerStateSlice.actions;

export default footerStateSlice.reducer;
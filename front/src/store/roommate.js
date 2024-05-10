import { createSlice } from '@reduxjs/toolkit';

export const roommateSlice = createSlice({
    name: "roommate",
    initialState: {
        roomWantAge: "",
        roomWantUniv: "",
        roomClean: "",
        roomPattern: "",
        roomIntro: "",
    },
    reducers: {
        setRoomWantAge(state, action) {
            state.roomWantAge = action.payload;
        },
        setRoomWantUniv(state, action) {
            state.roomWantUniv = action.payload;
        },
        setRoomClean(state, action) {
            state.roomClean = action.payload;
        },
        setRoomPattern(state, action) {
            state.roomPattern = action.payload;
        },
        setRoomIntro(state, action) {
            state.roomIntro = action.payload;
        },
    },
});

export const {setRoomWantAge, setRoomWantUniv, setRoomClean, setRoomIntro, setRoomPattern} = roommateSlice.actions;

export default roommateSlice.reducer;
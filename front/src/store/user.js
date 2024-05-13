import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "",
        gender: "",
        kakaoId: "",
        age: "",
        nickname: "",
        height: 170,
        weight: "",
        mbti: "",
        smoke: false,
        occupation: "",
        major: "",
        personality: "",
        frequency: 2,
        face: "",
        intro: "",
        state: "",
        wantGender: "",
        wantAge: "",
        wantHeight: 170,
        wantSmoke: false,
        wantOccupation: "",
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setGender: (state, action) => {
            state.gender = action.payload;
        },
        setAge: (state, action) => {
            state.age = action.payload;
        },
        setHeight: (state, action) => {
            state.height = action.payload;
        },
        setWeight: (state, action) => {
            state.weight = action.payload;
        },
        setMbti: (state, action) => {
            state.mbti = action.payload;
        },
        setSmoke: (state, action) => {
            state.smoke = action.payload;
        },
        setOccupation: (state, action) => {
            state.occupation = action.payload;
        },
        setMajor: (state, action) => {
            state.major = action.payload;
        },
        setPersonality: (state, action) => {
            state.personality = action.payload;
        },
        setFrequency: (state, action) => {
            state.frequency = action.payload;
        },
        setFace: (state, action) => {
            state.face = action.payload;
        },
        setIntro: (state, action) => {
            state.intro = action.payload;
        },
        setNickname: (state, action) => {
            state.nickname = action.payload;
        },
        setState: (state, action) => {
            state.state = action.payload;
        },
        setWantGender: (state, action) => {
            state.wantGender = action.payload;
        },
        setWantAge: (state, action) => {
            state.wantAge = action.payload;
        },
        setWantHeight: (state, action) => {
            state.wantHeight = action.payload;
        },
        setWantSmoke: (state, action) => {
            state.wantSmoke = action.payload;
        },
        setWantOccupation: (state, action) => {
            state.wantOccupation = action.payload;
        },
        setKakaoId: (state, action) => {
            state.kakaoId = action.payload;
        },
    },
});

export const {setName, setKakaoId, setGender, setAge, setHeight, setWeight, setMbti, setSmoke, setOccupation, setMajor, setPersonality, setFrequency, setFace, setIntro, setNickname, setState, setWantAge, setWantGender, setWantHeight, setWantSmoke, setWantOccupation} = userSlice.actions;

export default userSlice.reducer;
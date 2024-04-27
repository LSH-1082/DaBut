import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./user";
import pageReducer from "./page";

export default configureStore({
    reducer: {
        user: userReducer,
        page: pageReducer,
    },
})

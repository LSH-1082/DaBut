import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./user";
import pageReducer from "./page";
import mainPageReducer from "./mainPage";

export default configureStore({
    reducer: {
        user: userReducer,
        page: pageReducer,
        mainPage: mainPageReducer,
    },
})

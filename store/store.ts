import { configureStore } from "@reduxjs/toolkit";
import detailsReducer from "../slices/detailsSlice";
import langsReducer from "../slices/languageSlice";



export const store = configureStore({
    reducer:{
        details:detailsReducer,
        langs:langsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
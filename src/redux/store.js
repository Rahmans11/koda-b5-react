import { configureStore } from "@reduxjs/toolkit";
import smokerReducer from "./slices/formSmokerSlice"

const store = configureStore({
    reducer:{
        smokers: smokerReducer,
    }
});

export default store;
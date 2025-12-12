import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    smokers: [],
    nextId:1,
};

const smokerSlice = createSlice({
    initialState,
    name: "smokers",
    reducers:{
        addSmokers: (prevState, action) => {
            const newSmokers = [...prevState.smokers, 
                action.payload];
            prevState.smokers = newSmokers;
            prevState.nextId ++;

        },
        deleteSmokers: (prevState, action) => {
            const newSmokers = prevState.smokers.filter((smoker)=>{
                return smoker.id !== action.payload;
            })
            prevState.smokers = newSmokers;
        }
    }
});

export const {addSmokers, deleteSmokers} = smokerSlice.actions;
export default smokerSlice.reducer;
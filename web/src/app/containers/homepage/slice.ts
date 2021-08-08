import { createSelector, createSlice } from "@reduxjs/toolkit";
import { IRootAppState } from "../../model/appState";
import { IHomePageState } from "../../model/homePageState";

const initialState: IHomePageState = {
    topCars: [],
};

export const homePageSlice = createSlice({
    name: "homePage",
    initialState: initialState,
    reducers: {
        setTopCars: (state, action) => {
            state.topCars = action.payload;
        }
    },
});

export const carSelector = createSelector(
    (state: IRootAppState) => state,
    (state) => state.homePage.topCars,
);

export const { setTopCars } = homePageSlice.actions;
export default homePageSlice.reducer;
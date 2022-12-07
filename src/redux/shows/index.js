import { createSlice } from "@reduxjs/toolkit";
import { fetchAllShows, fetchAllLocations } from "./showsThunk";

const initialState = {
    allShows: [],
    allLocations: [],
    allLocationAudis: [],
    allLocationAudiShows: [],
};

const showsSlice = createSlice({
    name: "shows",
    initialState,
    reducers: {
        updatedSelectedShow: (state, { payload }) => {
            return {
                ...state,
                selectedShow: payload,
            };
        },
        updateLocationAudis: (state, { payload }) => {
            return {
                ...state,
                allLocationAudis: payload.audis,
            };
        },
        updateLocAudiShows: (state, { payload }) => {
            console.log("payload of selected Locations", payload);
            return {
                ...state,
                locationAudisShows: payload.shows,
            };
        },
    },
    extraReducers: {
        [fetchAllShows.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                allShows: payload,
            };
        },
        [fetchAllLocations.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                allLocations: payload,
            };
        },
    },
});

export { showsSlice as ShowsSlice };

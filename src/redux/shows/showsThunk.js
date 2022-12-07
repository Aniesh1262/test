import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchAllShows = createAsyncThunk("shows/fetchAllShows", async () => {
    try {
        const response = await axiosInstance.get("/shows");
        return response;
    } catch (err) {
        console.log("error is", err);
    }
});

export const fetchAllLocations = createAsyncThunk("shows/fetchAllLocations", async () => {
    try {
        const response = await axiosInstance.get("/locations");
        console.log("response from api", response);
        return response;
    } catch (err) {
        console.log("error is", err);
    }
});

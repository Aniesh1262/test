import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    imageUrl: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateUserDetails: (state, { payload }) => {
            state.name = payload.name;
            state.email = payload.email;
            state.imageUrl = payload.imageUrl;
        },
    },
});

export { userSlice as UserSlice };

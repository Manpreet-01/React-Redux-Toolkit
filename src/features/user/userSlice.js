import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access_token: null,
    refresh_token: null,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginHandlerReducer: (state, { payload }) => {
            state.access_token = payload.access_token
            state.refresh_token = payload.refresh_token
            state.error = payload.error
        },
    },
});

export const { loginHandlerReducer } = userSlice.actions;
export default userSlice.reducer;

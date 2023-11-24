import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    access_token: null,
    refresh_token: null,
    error: null,
    avatar: null,
    name: null,
    email: null,
    password: null,
    id: null,
    role: null,
    avatar: null,
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
        sessionHandlerReducer: (state, { payload }) => {
            state.id = payload.id;
            state.name = payload.name;
            state.email = payload.email;
            state.password = payload.password;
            state.role = payload.role;
            state.avatar = payload.avatar;
        },
        logoutHandlerReducer: (state, payload) => {
            Object.keys(state).forEach(prop => {
                state[prop] = null;
            })
        }
    },
});

export const {
    loginHandlerReducer,
    sessionHandlerReducer,
    logoutHandlerReducer,
} = userSlice.actions;

export default userSlice.reducer;

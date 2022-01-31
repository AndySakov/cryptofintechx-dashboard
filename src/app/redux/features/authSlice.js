import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    user: {},
    userToken: "",
  },
  reducers: {
    login: (state, { type, payload }) => {
      state.isAuthenticated = true;
      state.user = payload.user;
      state.userToken = payload.userToken;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.userToken = "";
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

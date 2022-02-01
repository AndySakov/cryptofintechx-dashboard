import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "auth",
  initialState: {
    messages: [],
    hasNewMessages: false,
  },
  reducers: {
    flashMessage: (state, { type, payload }) => {
      state.messages = [...state.messages, payload];
      state.hasNewMessages = true;
    },
    clearMessages: (state) => {
      state.messages = [];
      state.hasNewMessages = false;
    },
  },
});

export const { flashMessage, clearMessages } = messageSlice.actions;

export default messageSlice.reducer;

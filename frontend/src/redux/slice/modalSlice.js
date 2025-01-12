import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    changeModal: (state, action) => {
      const { name } = action.payload;
      state[name] = !state?.[name];
    },
  },
});

export const { changeModal } = modalSlice.actions;

export default modalSlice.reducer;

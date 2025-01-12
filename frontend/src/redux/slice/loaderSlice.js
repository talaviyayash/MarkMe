import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    changeLoader: (state, action) => {
      const { name } = action.payload;
      state[name] = !state?.[name];
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLoader } = loaderSlice.actions;

export default loaderSlice.reducer;

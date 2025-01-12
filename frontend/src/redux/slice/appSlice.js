import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flag: {},
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProfile } = appSlice.actions;

export default appSlice.reducer;

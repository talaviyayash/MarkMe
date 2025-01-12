import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "../slice/loaderSlice";
import appReducer from "../slice/appSlice";
import modalReducer from "../slice/modalSlice";

const store = configureStore({
  reducer: {
    loader: loaderReducer,
    app: appReducer,
    modal: modalReducer,
  },
});

export default store;

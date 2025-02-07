import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./fetures/userSlice"; // Import your user slice

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;

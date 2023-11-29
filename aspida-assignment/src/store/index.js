import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user";

// Extract the reducer function from the userSlice
const { reducer: userReducer } = userSlice;

const rootReducer = combineReducers({
  user: userReducer,
  // Add other reducers here if you have more slices
  // example: someReducer: someSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
});

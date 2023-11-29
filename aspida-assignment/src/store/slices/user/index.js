import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      isAuthenticated: false,
    },
  },
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
      const stringifyData = JSON.stringify({
        userId: action.payload,
      });
      localStorage.setItem("user", stringifyData);
    },
  },
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;

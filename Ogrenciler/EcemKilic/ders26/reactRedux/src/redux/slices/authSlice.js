import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logoutRedux: (state) => {
      localStorage.removeItem("user");
      state.user = false;
    },
  },
});

export const { loginRedux, logoutRedux } = authSlice.actions;
export default authSlice.reducer;

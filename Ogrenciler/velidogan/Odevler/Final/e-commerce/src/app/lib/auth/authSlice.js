import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? false,
  userMail: JSON.parse(localStorage.getItem("userMail")) ?? ""
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
      localStorage.removeItem("userMail");
      state.user = false;
    },
    setUserMail:(state,action) => {
      localStorage.setItem("userMail", JSON.stringify(action.payload));
      state.userMail = action.payload
    }
  },
});

export const { loginRedux, logoutRedux,setUserMail } = authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(window.localStorage.getItem("user")) ?? false,
  userMail: JSON.parse(window.localStorage.getItem("userMail")) ?? ""
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRedux: (state, action) => {
      window.localStorage.setItem("user", JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logoutRedux: (state) => {
      window.localStorage.removeItem("user");
      window.localStorage.removeItem("userMail");
      state.user = false;
    },
    setUserMail:(state,action) => {
      window.localStorage.setItem("userMail", JSON.stringify(action.payload));
      state.userMail = action.payload
    }
  },
});

export const { loginRedux, logoutRedux,setUserMail } = authSlice.actions;
export default authSlice.reducer;

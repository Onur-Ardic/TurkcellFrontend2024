import { createSlice } from "@reduxjs/toolkit";
import { login, register, logout } from "../../firebase/auth";

const initialState = {
  users: [{ id: 1, username: "admin", password: "admin" }],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      login(action.payload.email, action.payload.password);
    },
    registerUser: async (state, action) => {
      const data = await register(
        action.payload.email,
        action.payload.password
      );
      console.log("registeeruseer", data.user.email);
    },
    logoutUser: (state, action) => {
      logout();
    },
  },
});

export default userSlice.reducer;
export const { loginUser, registerUser, logoutUser } = userSlice.actions;

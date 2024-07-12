import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:
    typeof window !== "undefined" && localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      typeof window !== "undefined" &&
        localStorage.setItem("user", JSON.stringify(action.payload));
    },
    removeUser: (state) => {
      state.user = null;
      typeof window !== "undefined" && localStorage.removeItem("user");
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;

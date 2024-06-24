import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedInUser: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.loggedInUser = action.payload;
            console.log(state.loggedInUser);
        },
        clearUser: (state) => {
            state.loggedInUser = null;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const selectLoggedInUser = (state) => state.user.loggedInUser;
export default userSlice.reducer;

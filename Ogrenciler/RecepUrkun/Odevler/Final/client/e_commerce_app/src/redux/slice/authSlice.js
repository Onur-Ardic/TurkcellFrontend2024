import { createSlice } from "@reduxjs/toolkit";

const getUserFromStorage = () => {
    if (typeof window !== "undefined") {
        const user = window.localStorage.getItem("loggedInUser");
        return user ? JSON.parse(user) : "";
    }
    return "";
};

const initialState = {
    loggedInUser: getUserFromStorage(),
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action) => {
            if (typeof window !== "undefined") {
                localStorage.setItem("loggedInUser", JSON.stringify(action.payload));
            }
            state.loggedInUser = action.payload;
        },
        clearUser: (state) => {
            if (typeof window !== "undefined") {
                localStorage.removeItem("loggedInUser");
            }
            state.loggedInUser = "";
        },
    },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;


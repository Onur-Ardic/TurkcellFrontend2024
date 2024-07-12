import { createSlice } from "@reduxjs/toolkit";

const getUserLocalStorage = () => {
    if (typeof window !== "undefined") {
        const user = window.localStorage.getItem("user");
        return user ? JSON.parse(user) : false;
    }
    return false;
};

const initialState = {
    user: getUserLocalStorage()
}


const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogin: (state, action) => {
            if (typeof window !== "undefined") {
                window.localStorage.setItem("user", JSON.stringify(action.payload));
            }
            state.user = action.payload;
        },
        userLogout: (state) => {
            if (typeof window !== "undefined") {
                window.localStorage.removeItem("user");
            }
            state.user = false;
        }

    }
});

export const { userLogin, userLogout } = authSlice.actions;
export default authSlice.reducer;
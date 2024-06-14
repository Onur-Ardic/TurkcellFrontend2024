import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tema: "light"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.tema = state.tema === "dark" ? "light" : "dark";
        }
    }
})

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
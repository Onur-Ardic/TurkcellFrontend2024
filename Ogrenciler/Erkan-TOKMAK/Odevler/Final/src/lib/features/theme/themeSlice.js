import { createSlice } from '@reduxjs/toolkit';

const getThemeLocalStorage = () => {
    if (typeof window !== "undefined") {
        try {
            const theme = window.localStorage.getItem("theme");
            return theme === "dark" ? true : false;
        } catch (error) {
            console.error("Error accessing local storage:", error);
            return false;
        }
    }
    return false;
};

const saveToLocalStorage = (darkMode) => {
    if (typeof window !== "undefined" && typeof darkMode === 'boolean') {
        try {
            window.localStorage.setItem("theme", darkMode ? "dark" : "light");
        } catch (error) {
            console.error("Error saving to local storage:", error);
        }
    }
};

const initialState = {
    darkMode: getThemeLocalStorage()
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
            saveToLocalStorage(state.darkMode);
        },
    },
});

export const { toggleDarkMode } = themeSlice.actions;

export default themeSlice.reducer;

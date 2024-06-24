import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: "light"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        temayiDegistir: (state, action) => {
            state.value = state.value == "dark" ? "light" : "dark"
        }
    }
})

export const { temayiDegistir } = themeSlice.actions
export default themeSlice.reducer
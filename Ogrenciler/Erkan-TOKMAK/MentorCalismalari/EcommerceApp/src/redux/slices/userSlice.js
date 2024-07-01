import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            // fonksiyon
        },
        removeUser: (state) => {
            // fonksiyon
        },
        updateUser: (state, action) => {
            // fonksiyon
        }
    }

})

export const { setUser, removeUser, updateUser } = userSlice.actions
export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
           const user = action.payload
              state.user = user

        },
        removeUser: (state) => {
            const user = null
            state.user = user
        },
        updateUser: (state, action) => {
           const updatedUser = action.payload
              state.user = updatedUser
        }
    }

})

export const { setUser, removeUser, updateUser } = userSlice.actions
export default userSlice.reducer
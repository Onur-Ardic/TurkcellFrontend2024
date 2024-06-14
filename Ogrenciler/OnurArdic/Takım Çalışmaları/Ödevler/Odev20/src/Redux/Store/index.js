import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../Slices/todoSlice'
import auth from '../Slices/auth'

const store = configureStore({
  reducer: {
    todo: todoReducer,
    auth,
  },
})
export default store

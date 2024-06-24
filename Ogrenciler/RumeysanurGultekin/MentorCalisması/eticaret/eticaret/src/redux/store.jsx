import { configureStore } from '@reduxjs/toolkit'
import appReducer from './slice/Appslice'
import productReducer from './slice/Productslice'
import filterReducer from './slice/Filterslice'

export const store = configureStore({
  reducer: {
    app: appReducer,
    product: productReducer,
    filter: filterReducer,
  },
})
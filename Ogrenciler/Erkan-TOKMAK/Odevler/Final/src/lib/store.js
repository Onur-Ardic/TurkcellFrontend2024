import { configureStore } from '@reduxjs/toolkit';
import  productReducer  from './features/product/productSlice'
import  themeReducer  from './features/theme/themeSlice'
import cartReducer from './features/cart/cartSlice'
import userReducer from './features/auth/authSlice'

export const makeStore = () => {
  return configureStore({
   reducer: {
        user: userReducer,
        cart: cartReducer,
        product: productReducer,
        theme: themeReducer,
        
    }
  })
}
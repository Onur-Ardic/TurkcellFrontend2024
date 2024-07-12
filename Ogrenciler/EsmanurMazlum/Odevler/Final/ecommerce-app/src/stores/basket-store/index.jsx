import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalAmount: 0
}


export const {reducer, actions} = createSlice({
    name: 'basket',
    initialState,
    reducers: {
      addToBasket: (state, action) => {
        const findProduct = state.products && state.products.find((product) => product.id === action.payload.id);
        if(findProduct){
            findProduct.count = action.payload.count;
        }else{
            state.products.push(action.payload);
        }
      },
      setBasket: (state, action) => {
        state.products = action.payload;
      },
      clearBasket: (state) => {
        state.products = [];
      },
      calculateBasket: (state) => {
        state.totalAmount = 0;
        state.totalAmount = state.products.reduce((total, product) => {
          const discount = product.discountRate ? product.price * product.discountRate * product.count : 0;
          return total += (product.price * product.count - discount);
        }, 0);
      },
      removeFromBasket: (state, action) => {
        state.products = state.products.filter(product => product.id !== action.payload);
      }
    },
  });
  
  
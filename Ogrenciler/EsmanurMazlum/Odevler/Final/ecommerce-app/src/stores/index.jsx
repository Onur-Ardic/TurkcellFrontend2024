import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './products-store'
import {reducer as basketReducer} from './basket-store'
import {reducer as userReducer} from './user-store'


export function createStore (preloadedState = {}) {
    const store = configureStore({
        reducer: {
            products: productsReducer,
            basket: basketReducer,
            user: userReducer
        },
        preloadedState
    });

    return store;
}


export const store = createStore();

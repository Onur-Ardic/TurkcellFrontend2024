import { createStore } from 'redux';

// Başlangıç durumu
const initialState = {
  count: 0
};

// Redüktör fonksiyonu
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Store oluşturma
const store = createStore(counterReducer); //Redux store'u oluşturma, counterReducer'ı kullanır

export default store;

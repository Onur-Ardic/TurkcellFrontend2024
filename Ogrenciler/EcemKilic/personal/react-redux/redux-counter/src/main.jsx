import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'; //React-Redux'tan gelen Provider bileşeni,uygulamanın her yerinde Redux store'a erişilebilir
import store from './store'; //Oluşturduğumuz Redux store'u Provider bileşenine geçirilir
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DenemeProvider } from './context/DenemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DenemeProvider>
      <App />
    </DenemeProvider>
  </React.StrictMode>,
)

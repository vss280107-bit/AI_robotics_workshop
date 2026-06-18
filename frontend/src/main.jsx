import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 4000,
        style: {
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          borderRadius: '12px',
        },
        success: {
          style: { background: '#6D28D9', color: '#fff' },
          iconTheme: { primary: '#F59E0B', secondary: '#fff' },
        },
        error: {
          style: { background: '#EF4444', color: '#fff' },
        },
      }}
    />
  </React.StrictMode>
)

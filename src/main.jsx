import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { AuthContextProvider } from './context/AuthContext.jsx';
import { SocketContextProvider } from './context/SocketContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <AuthContextProvider>
        <SocketContextProvider>
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </SocketContextProvider>
      </AuthContextProvider>
    </AuthProvider>
  </React.StrictMode>,
)

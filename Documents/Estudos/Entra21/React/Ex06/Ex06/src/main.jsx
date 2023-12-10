import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from './styles/globalStyles';
import { Routes } from './routes/index.jsx';
import { UsersContextProvider } from "./context/context.jsx"




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />

    <UsersContextProvider>
      <Routes></Routes>
    </UsersContextProvider>
  </React.StrictMode>,
)

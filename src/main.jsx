import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyles from './styles/global'
import { Routes } from './routes';
import { DishDetails } from './pages/Dish/Details';
import { AuthProvider } from './hooks/auth';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AuthProvider>
          <Routes />
        </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import Store from './Redux/Store.jsx'
import {Provider} from 'react-redux'
createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
  <BrowserRouter>
  <AuthProvider>
  <StrictMode>
    <App />
  </StrictMode>
  </AuthProvider>
  </BrowserRouter>
  </Provider>
)

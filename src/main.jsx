import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AdminAuthProvider } from './context/AdminAuth.jsx'
import { AuthProvider } from './context/Auth.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AdminAuthProvider>
      <AuthProvider>
       <App />
       </AuthProvider>
    </AdminAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)

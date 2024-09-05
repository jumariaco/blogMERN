import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{
  createBrowserRouter,
  RouterProvider
} from 'react-router-down'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <App />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

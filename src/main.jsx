import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routerConfig.jsx'
import { FiltersProvider } from './context/filterContext.jsx'
import { CartProvider } from './context/cartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FiltersProvider>
      <CartProvider>
        {/* <App /> */}
        <RouterProvider router={router} /> 
      </CartProvider>
    </FiltersProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './index.css'

//Product provider
import ProductProvider from './contexts/ProductContext1.jsx'
import SidebarProvider from './contexts/SidebarContext.jsx'
import CartProvider from './contexts/CartContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>



  ,
)

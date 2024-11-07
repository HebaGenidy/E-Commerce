import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Product from './Components/ProductList'
import Navbar from './Components/Navigation'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Product/>
    <Navbar/>
  </StrictMode>
)

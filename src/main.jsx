import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GetRickAndMorty from './pages/GetRickAndMorty'
// import './index.css'
// import App from './App.jsx'
// import ProductForm from './pages/ProductForm.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <ProductForm/> */}
    <GetRickAndMorty/>
  </StrictMode>,
)

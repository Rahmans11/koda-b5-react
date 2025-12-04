import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
// import GetRickAndMorty from './pages/GetRickAndMorty'
// import './index.css'
// import App from './App.jsx'
// import ProductForm from './pages/ProductForm.jsx'
import Router from './Router'


createRoot(document.querySelector("#root")).render(
  <StrictMode>
    {/* <App/> */}
    {/* <ProductForm/> */}
    {/* <GetRickAndMorty/> */}
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  </StrictMode>,
)

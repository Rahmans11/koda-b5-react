import React from 'react'
import {Routes, Route} from "react-router"
import Home from './pages/Home'
import App from './pages/App'
import ProductForm from "./pages/ProductForm"
import GetRickAndMorty from './pages/GetRickAndMorty'
import NotFound from './pages/NotFound'
import Review from './pages/Review'
import Login from './pages/Login'
import FetchCustom from './pages/FetchCustom'

export default function Router() {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/app' element={<App />}/>
        <Route path='/productForm' element={<ProductForm />}/>
        <Route path='/getRickAndMorty' element={<GetRickAndMorty />}/>
        <Route path='/review' element={<Review />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/customFetch' element={<FetchCustom/>}/>
        <Route path='/smokerForm'/>
        <Route path='/*' element={<NotFound />}/>
    </Routes>
  )
}


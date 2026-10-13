import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
   <>
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/product/:id/view' element={<Product/>}/>
    <Route path='/wishlist' element={<Wishlist/>}/>
    <Route path='/cart' element={<Cart/>}/>

   </Routes>
   
   <Footer />

   </>
  )
}

export default App
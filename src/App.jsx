
import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Category from './pages/Category'
import Favorite from './pages/Favorite'
import Cart from './pages/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/category/:type" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
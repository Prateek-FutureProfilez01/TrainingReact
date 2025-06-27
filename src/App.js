import React from 'react'
import Home from './Pages/Home'
import Product from './Pages/product'
import Contact from './Pages/Contact'
import About from './Pages/About'
import "./App.css"
import NavBar from './components/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProdcutData from './Pages/ProdcutData'
import Todo from './Pages/Todo'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Product />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProdcutData />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Todo' element={<Todo />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
};

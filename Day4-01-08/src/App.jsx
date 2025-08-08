import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Todo from './components/Todo'
import FakeStore from './pages/FakeStore'
import SingleProduct from './pages/SingleProduct'
import AllProducts from './pages/AllProducts'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Todo/>}/>
        <Route path='/fakestore' element={<FakeStore/>}/>
        <Route path='/product/:productId' element={<SingleProduct/>}/>
        <Route path='/allproducts' element={<AllProducts/>}/>

      </Routes>
    </>
  )
}

export default App

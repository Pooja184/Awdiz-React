import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Todo from './components/Todo'
import FakeStore from './pages/FakeStore'
import SingleProduct from './pages/SingleProduct'
import AllProducts from './pages/AllProducts'
import UseMemo from './10aug/UseMemo'
import UseReducer from './13aug/UseReducer'
import Reducer from './20aug/Reducer'
import Theme from './22aug/Theme'
import AddToCart from './23aug/AddToCart'
import Calculator from './23aug/Calculator'
import Register from './30aug/Register'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Todo/>}/>
        <Route path='/fakestore' element={<FakeStore/>}/>
        <Route path='/product/:productId' element={<SingleProduct/>}/>
        <Route path='/allproducts' element={<AllProducts/>}/>
        <Route path='/usememo' element={<UseMemo/>}/>
        <Route path='/usereducer' element={<UseReducer/>}/>
        <Route path='/reducer' element={<Reducer/>}/>
        <Route path='/theme' element={<Theme/>}/>
        <Route path='/addtocart' element={<AddToCart/>}/>
        <Route path='/calculator' element={<Calculator/>}/>
        <Route path='/register' element={<Register/>}/>


      </Routes>
    </>
  )
}

export default App


import React from 'react'
import '../src/App.css'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  return (
    <>
  
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>

     </Routes>
    </>
  )
}

export default App

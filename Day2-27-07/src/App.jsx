
import React from 'react'
import '../src/App.css'
import { Route, Routes } from 'react-router-dom'
// import Navbar from './component/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import FakeStore from './pages/FakeStore'
const App = () => {
  return (
    <>
  
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/fakestrore' element={<FakeStore/>}/>

      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App

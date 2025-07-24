import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './components/register'
import './App.css'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register/>}/> 
      </Routes>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Todo from './components/Todo'
import Delete from './components/Delete'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Todo/>}/>

      </Routes>
    </>
  )
}

export default App

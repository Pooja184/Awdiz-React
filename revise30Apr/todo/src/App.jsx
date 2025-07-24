import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todo from './components/Todo'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Todo/>}/>
      </Routes>
    </>
  )
}

export default App

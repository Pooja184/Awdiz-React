import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Todo from './todo/Todo'
import Navbar from './components/Navbar'
import UserForm from './components/UserForm'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserForm/>}/>
        <Route path='/nav' element={<Navbar/>}/>
        {/* <Route path='/todo' element={<Todo/>}/> */}
      </Routes>
    </>
  )
}

export default App

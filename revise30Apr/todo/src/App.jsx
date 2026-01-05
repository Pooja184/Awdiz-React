import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Todo from './todo/Todo'
import Navbar from './components/Navbar'
import UserForm from './components/UserForm'
import Todo1 from './components/Todo1'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Todo1/>}/>
        <Route path='/form' element={<UserForm/>}/>
        <Route path='/nav' element={<Navbar/>}/>
        {/* <Route path='/todo' element={<Todo/>}/> */}
      </Routes>
    </>
  )
}

export default App

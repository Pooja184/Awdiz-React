import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Todo from './components/Todo'
import TodoApp from './components/TodoApp'

function App() {

  return (
    <>
    <Routes>
  <Route path='/' element={<TodoApp/>}/>
  <Route path='/todo' element={<Todo/>}/>
    </Routes>
    </>
  )
}

export default App

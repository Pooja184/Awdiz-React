import { Routes,Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import RegisterU from './components/RegisterU'
import Login from './components/Login'

function App() {

  return (
    <>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/register' element={<RegisterU/>}/>
    <Route path='/Login' element={<Login/>}/>
   </Routes>
    </>
  )
}

export default App

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Counter from './components/Counter'
import UseEffect from './components/useEffect'
import UseParams from './components/UseParams'
import ParamsProduct from './components/ParamsProduct'
import Register from './components/Register'
import Home from './components/Home'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/useEffect' element={<UseEffect/>}/>
      <Route path='/params' element={<UseParams/>}/>
      <Route path='/paramProducts/:uniqueid' element={<ParamsProduct/>}/>
      <Route path='/register' element={<Register/>}/>
      </Routes>        
    </>
  )
}

export default App

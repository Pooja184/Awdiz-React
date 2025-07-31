import './App.css'
import { Route, Routes } from 'react-router-dom'
import Counter from './components/Counter'
import UseEffect from './components/UseEffect'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Counter/>}/>
        <Route path='/useeffect' element={<UseEffect/>}/>

      </Routes>
    </>
  )
}

export default App

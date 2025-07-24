import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Todos from './components/Todos'
import UseCallback from './components/UseCallback'
import UseMemo from './components/UseMemo'



function App() {

  return (
   <>
<Routes>
  <Route path='/todos' element={<Todos/>}/>
  <Route path='/useCallback' element={<UseCallback/>}/>
  <Route path='/useMemo' element={<UseMemo/>}/>

</Routes>
   </>
  )
}

export default App

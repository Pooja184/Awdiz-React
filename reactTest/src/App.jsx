import React from 'react'
import { Route, Routes } from 'react-router-dom'
import "./App.css"
import Review from './components/Review'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/review' element={<Review/>}/>
      </Routes>
    </div>
  )
}

export default App

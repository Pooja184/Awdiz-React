import { Route, Routes } from "react-router-dom"
import UseState from "./components/UseState"
import Useparams from "./components/Useparams"
import Product from "./components/Product"

function App() {

  return (
   <>
<Routes>
  <Route path="/" element={<UseState/>}/>
  <Route path="/useparams" element={<Useparams/>}/>
  <Route path="/product/:uniqueid" element={<Product/>}/>
</Routes>
   </>
  )
}

export default App

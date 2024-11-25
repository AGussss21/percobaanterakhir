import React from "react"
import Sandwichtelurkeju from "./pages/Sandwichtelurkeju"
import Potatowedges from "./pages/Potatowedges"
import Saladsayur from "./pages/Saladsayur"
import Makanmalam from "./pages/Makanmalam"
import Makansiang from "./pages/Makansiang"
import Sarapan from "./pages/Sarapan"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"



function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sarapan' element={<Sarapan/>}/>
          <Route path='/makansiang' element={<Makansiang/>}/>
          <Route path='/makanmalam' element={<Makanmalam/>}/>
          <Route path='/sandwichtelurkeju' element={<Sandwichtelurkeju/>}/>
          <Route path='/saladsayur' element={<Saladsayur/>}/>
          <Route path='/potatowedges' element={<Potatowedges/>}/>
          </Routes>
          </BrowserRouter>
    )
}

export default App
import React from 'react'
import Data from '../Components/Data'
// import Header from '../Components/Header'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import About from '../Components/About'
import SignUp from '../Components/SignUp'
import SideNav from '../Components/SideNav'
import Header from '../Components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      {/* <SideNav/> */}
    {/* <Home />? */}
    {/* <About /> */}
    {/* <Blog/> */}

     <Routes>
      <Route path="/" element={<Home/>} ></Route>
      <Route path="/about" element={<About/>} ></Route>
      <Route path="/signup" element={<SignUp/>} ></Route>
      <Route path="/items" element={<Data/>} ></Route>
     </Routes>

      {/* <Data /> */}
      </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Home from './Components/Home/Home.jsx'
import Coin from './Components/Coin/Coin.jsx'
import { Routes, Route } from 'react-router'
import Footer from './Components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>}/>
      </Routes>
      <Footer/>
    </div>
    </>
  )
}

export default App
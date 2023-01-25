import React from 'react'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Main from './Components/Main/Main'
import './style.css'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </div>
  )
}

export default App

import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import "./App.css"
import SmallSlider from './components/SmallSlider'
import Hero from './components/Hero'
const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <SmallSlider/>
      <Hero/>
    </div>
  )
}

export default App
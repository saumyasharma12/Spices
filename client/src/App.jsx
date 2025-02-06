import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import "./App.css"
import SmallSlider from './components/SmallSlider'
import Hero from './components/Hero'
import Bottompart from './components/Bottompart'
import Footer from './components/Footer'
import SmallFooter from './components/smallFooter'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Header/>
      <SmallSlider/>
      <Hero/>
      <Bottompart/>
      <SmallFooter/>
      <Footer/>
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-[url('./assets/herobg.png')] bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>

        <About/>
        <div className="bg-motherboard">
          <Tech/>
        </div>
        <Experience/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App

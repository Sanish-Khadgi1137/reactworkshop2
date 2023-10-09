import React from 'react'

import Navbar from './components/nav/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (

    <div>

      <Navbar />
      {/* //these call should be in order */}

      <Home />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>

  )
}

export default App
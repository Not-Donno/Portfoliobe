import React from 'react'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Tech from './components/tech'
import Project from './components/project'
import Contact from './components/contact'


const App = () =>{
  return(
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 font-inter'>

      <div className="flixed top-0 -z-10 h-full w-full">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(200,200,200,0.3),rgba(255,255,255,0))]"></div>

      </div>
      <div className="container mx-auto px-8">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Project />
      <Contact />
      </div>
    </div>
  )
}
export default App
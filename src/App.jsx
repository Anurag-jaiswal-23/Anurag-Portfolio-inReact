import { useState } from 'react'
import Nav from './Components/nav'
import { Hero, About, Skills, Project, Contact, Footer } from './Components'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer/>
    </>
  )
}

export default App

import { useState } from 'react'
import { Home } from './pages'
import Navbar from './components/Navbar'
// npm install @mui/material @emotion/react @emotion/styled react-router-dom @mui/x-charts react-draggable openmeteo @react-google-maps/api react-icons gsap @gsap/react
function App() {


  return (
    <>
      <Navbar />
      <Home />
    </>
  )
}

export default App

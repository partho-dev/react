import ClockComponents from './components/ClockComponents'
import TimeComponent from './components/TimeComponent'

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  
  return (
    <>
    <center className='main'>
    <ClockComponents/>
    <TimeComponent/>
    </center>
    </>
  )
}

export default App

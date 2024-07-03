import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[count, setCount]=useState(0)
  return(
    <>
    <button onClick={()=>{setCount(count+1)}}> Click  </button>
    { count === 0 ? <h1> Hello </h1> : <h1> Hello {count} </h1> } 
    </>
  )
}

export default App

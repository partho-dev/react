import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1> Partho {count} </h1>
        <button onClick={()=>{setCount((prev)=>prev+1)}} > Add </button>
        <button onClick={()=>{count>0 && setCount((prev)=>prev-1)}} > Remove </button>
    </>
  )
}

export default App

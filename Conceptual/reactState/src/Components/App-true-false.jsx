import { useState } from 'react'

function App() {

  const [status, setStatus] = useState(true)

  return (
    <>
      <h1> Status : {status.toString()} </h1>
      <button onClick={()=>{setStatus(!status)}} > Change Status</button>
    </>
  )
}

export default App

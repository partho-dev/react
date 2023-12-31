import { useState } from 'react'

function App() {
  var initialData = [{name:"Mark", status:true},{name:"John", status:false}]

  const [status, setStatus] = useState(initialData)

  const handleStatusChange = (index) => {
    const updatedStatus = [...status]
    updatedStatus[index] = { ...updatedStatus[index], status: !updatedStatus[index].status }
    setStatus(updatedStatus)
  }

  return (
    <>
    {status.map((item, index)=>{return(
        <div className='main' >
         <div key={index} className='p-4 h-30 w-28 bg-zinc-300 text-xs m-4 '   >
         <h1>Name : {item.name} </h1>
         <h1> Banned: {item.status.toString()} </h1>
         <button className={`px-3 py-1 ${item.status?"bg-blue-600":"bg-red-600"}  text-xs rounded-full text-white mt-2 `} 
         onClick={()=>handleStatusChange(index)} > Change </button>
         </div>
         </div>

    )})}
    </>
  )
}

export default App

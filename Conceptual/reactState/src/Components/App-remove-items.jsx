import { useState } from 'react'

function App() {
const [val, setVal] = useState([1,2,3,4,5,6])


  return (
    <>
      {val.map((item, index)=>{return(
        <h1 className=' px-10 mt-1 ' key={index} > Item : <span className=' font-bold ' > {item} </span>  </h1>
      )})}
      <button className=' px-3 py-2 bg-blue-200 ml-10 rounded-full ' 
      // onClick={()=>{setVal(()=>{ return val.filter((item, index)=>{return index != val.length - 1})})}}
      // onClick={()=>{setVal(val.slice(0, -1))}}
      onClick={()=>{setVal(()=>{return val.filter((item, index)=>{return index !== 1})})}}
      > Click </button>

      {val.map((item, index)=>{return <h5 key={index} > I am double and its value is:  {item*2} </h5> })}
    </>
  )
}

export default App

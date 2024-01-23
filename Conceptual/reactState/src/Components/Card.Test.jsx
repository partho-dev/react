import React from 'react'

const Card = ({name,occupation, age, status, setClick, index}) => {
  return (
    <div className=' m-3 w-48 h-32 bg-orange-400 flex relative '>
      <div className=' w-16 h-16 bg-zinc-100 ml-1 ' > <img src="" alt="" /> </div>
      <div className='ml-2 text-sm ' > 
        <h1> {name} </h1> 
        <h6> {occupation}</h6> 
        <h6>{age}</h6> 
      </div>
        <button onClick={()=>{setClick(index)}} className={`h-8 px-2 py-1 ${status===true?"bg-yellow-200":"bg-green-200"} rounded-full absolute bottom-0 left-1/2 -translate-x-[-50%] -translate-y-[-50%]`}> {(status===true?"Watch":"Done")} </button>
      
    </div>
  )
}

export default Card

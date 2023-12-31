import React from 'react'

function Cards({name,color, course}) {
  return (
    <div className='flex bg-red-400 ' >
        <div  className=' px-2 bg-zinc-300 w-20 font-light m-10 mt-1  ' >
            <h1 className=' font-medium p-1 '> {course} </h1>
            <button className={`mt-4 ${color}`} > {name} </button>
        </div>
    </div>
  )
}

export default Cards

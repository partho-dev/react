import React from 'react'

const Todo = ({text, useInput, useAddbtn, items, useDeleteBtn, useEditBtn}) => {
  return (
    <div className='bg-zinc-100 h-80 max-h-screen w-96 m-2 rounded-md'>
        <h1 className='text-xl' >To-Do for : {new Date().toISOString().slice(0, 10)} </h1>
    
        <form>
            <input onChange={(e)=>{useInput(e)}} value={text} className=' outline-none m-2 rounded-lg p-2 w-80 ' type="text" placeholder='Enter something' />
            <button onClick={(e)=>{useAddbtn(e)}} className='px-1 py-2 bg-white rounded-lg'> Add </button>
        </form>
        
        <ol className=' relative '>

            {items.map((item, index)=>{return (
            <li className='py-2 bg-black rounded-md p-1 m-1 text-white' key={index} > {index+1} - {item} 
            <div className='absolute right-1 px-1 top-2 gap-1 w-30' >
            <button className='bg-red-300 text-black rounded-md px-1 cursor-pointer' onClick={()=>{useDeleteBtn(index)}} > 
            Delete </button>
            <button className='bg-red-300 text-black rounded-md px-1 cursor-pointer' onClick={()=>{useEditBtn(index)}} >Edit</button>
            </div> </li> 
            )})}
        </ol>
      
    </div>
  )
}

export default Todo

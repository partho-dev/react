import React from 'react'

const Search = ({onSearch, onSearchfn }) => {
  return (
    <div className='m-10' >
      <input onChange={(e)=>{onSearchfn(e)}} type="text" placeholder='type' value={onSearch} />
      <button  className='text-orange-800 ml-2 rounded-md bg-zinc-100'> Search </button>
    </div>
  )
}

export default Search

import React from 'react'

const Cards = ({image, name, star, price, cartAdd, index, buttonClick}) => {
  return (
    <div className='h-60 w-48 bg-slate-300 rounded-md m-4 overflow-hidden relative ' >
      <div className= ' h-28 w-full bg-slate-100 ' > <img className=' h-full w-full object-cover ' src= {image} alt="" /> </div>
      <div className=' text-l font-medium font-serif m-2 ' > 
        <h3> {name} </h3>
        <h3> Star Rating : <span className=' text-red-800 ' > {star} </span> </h3>
        <h3> Price :$ <span className=' text-red-800 ' > {price} </span>  </h3>
        <button onClick={()=>{buttonClick(index)}} className={`px-3 py-1 rounded-full ${(cartAdd==true)?"bg-orange-400":"bg-slate-400"}  m-2 absolute bottom-1 left-7`} > {(cartAdd===true)?"Added":"Add to Cart"} </button>
     </div>
    </div>
  )
}

export default Cards

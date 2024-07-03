import React from 'react'

const Navbar = ({count, product}) => {
  return (
    <div className=' h-10 w-full bg-cyan-100 flex items-end' >
        <h1 className='p-2' > Cart : <span className='text-orange-600 font-bold' > { (count===0)?"Add items" :(product.filter((item)=>item.cartAdd)).length} </span> </h1>
    </div>
  )
}

export default Navbar

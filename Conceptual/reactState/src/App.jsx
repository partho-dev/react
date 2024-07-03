import React, { useState } from 'react'
import Cards from './Cards'
import Navbar from './Navbar'
import Search from './Search'
import Ratings from './Ratings'

const App = () => {
    // const frineds = ["Rahul", "Simran", "Shana", "Patrick", "John", "Victor", "Amela", "Bob", "Ricky", "Shane"]
    const products = [ {image:"https://images.unsplash.com/photo-1546776230-bb86256870ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRveXxlbnwwfHwwfHx8MA%3D%3D", name:"Funny tom", star:4.9, price:10, cartAdd:false},
                        {image:"https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRveXxlbnwwfHwwfHx8MA%3D%3D", name:"Yello Car", star:4.5, price:15, cartAdd:false},
                        {image:"https://images.unsplash.com/photo-1615486364134-62a4c72c822d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRveXxlbnwwfHwwfHx8MA%3D%3D", name:"One Eye Boy", star:4.2, price:12, cartAdd:false},
                        {image:"https://images.unsplash.com/photo-1581557991964-125469da3b8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dG95fGVufDB8fDB8fHww", name:"Tall boy waving hand", star:5, price:20, cartAdd:false},
                        {image:"https://images.unsplash.com/photo-1618500299034-abce7ed0e8df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHRveXxlbnwwfHwwfHx8MA%3D%3D", name:"Cute Cat with hat", star:4.9, price:11, cartAdd:false},
                        {image:"https://images.unsplash.com/photo-1615989382340-2595ed787ae6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHRveXxlbnwwfHwwfHx8MA%3D%3D", name:"Thinking Boy", star:5, price:10, cartAdd:false},
                        {image:"https://images.unsplash.com/photo-1496354265829-17b1c7b7c363?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHRveXxlbnwwfHwwfHx8MA%3D%3D", name:"Rubic Cube", star:4.8, price:20, cartAdd:false},
                        {image:"https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHRveXxlbnwwfHwwfHx8MA%3D%3D", name:"Teddy", star:5, price:10, cartAdd:false}
                        ]
                        

const [product, setProduct] = useState(products)
const [cartCount, setCartCount] = useState(product.filter((item)=>{return item.cartAdd===true }).length)


function above4(){
  let filteredProd = product.filter((item)=>{ return item.star > 4.5 })
  // setProduct(filteredProd.map(item=>{return item}))
  setProduct(filteredProd)
  // console.log(filteredProd)
}

function bellow4(){
  let filteredProd = product.filter((item)=>{ return item.star < 4.5 })
  // setProduct(filteredProd.map(item=>{return item}))
  setProduct(filteredProd)
  // console.log(filteredProd)
}

function fiveStar(){
  let filteredProd = product.filter((item)=>{ return item.star === 5 })
  // setProduct(filteredProd.map(item=>{return item}))
  setProduct(filteredProd)
  // console.log(filteredProd)
}


function buttonClick(index){
    setProduct((prev)=> {return prev.map((item, indexItem)=>{
        if(indexItem===index){
        setCartCount((prev)=>{return item.cartAdd===true?prev-1:prev+1})
        return {...item, cartAdd: !item.cartAdd}}
        return item
    })})
}

  return (
    <>
    <div className=' bg-gray-800 h-screen w-full p-1' >
        <Navbar count={cartCount} product={product} />
        <Ratings above4={above4} bellow4={bellow4} fiveStar={fiveStar}  />    
        <div className='flex flex-wrap m-1 '>
        {product.map((item, index)=>{return <Cards key={index} {...item} index={index} buttonClick={buttonClick} />})}
        </div>
    </div>
    </>
  )
}

export default App

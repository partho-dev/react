import React, { useState } from 'react'
import Card from './Card'

const App = () => {
    var data = [{name:"Partho", occupation:"IT", age:40, status:true },{name:"Shyam", occupation:"Cybe", age:40 , status:false},{name:"Jyothi", occupation:"Singer", age:40, status:true }]
    const [user, setUser] = useState(data)
    const [index, setIndex] = useState("")

    function setClick(index){
        // console.log(index)
        setIndex(index+1)
        setUser(prev=>prev.map((item, indexedItem)=>{  
            if(index === indexedItem ) {return {...item, status:!item.status }}else{return item} 
        }))
    }
  return (
    <>
    <div className='flex'>
        {user.map((elem, index)=>{return <Card key={index} {...elem} index={index} setClick={setClick} />})}
    </div>

    <p> The box clicked now is: {index}  </p>
    </>
  )
}

export default App

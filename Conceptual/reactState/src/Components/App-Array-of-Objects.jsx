//Lets play with useState and objects

import React, { useState } from 'react'

const App = () => {

  const [car, setCar] =  useState([{year:"2014", brand:"Honda", model:"City"}])
  const [input, setInput] = useState({year:"", brand:"", model:""})
  // console.log("input is ", input)
  // console.log("car is", car)

  const handleSubmit= (e)=>{
    e.preventDefault()
    setCar([...car, {...input} ])
    setInput({year:"", brand:"", model:""})
  }

  const handleInput = (e) =>{
      setInput({...input, [e.target.name]:e.target.value})
  }

  return (
    <div>
      {car.map((elem, index)=>{return  (<p key={index} > My fav car is {elem.year}, {elem.brand} , {elem.model}  </p>)})}
      {/* <p> My fav car is 2014, Hyundai, Grand-i10  </p> */}
      <form  onSubmit={(e)=>{handleSubmit(e)}} >
        <input type="text" placeholder='type the year of make' name="year" value={input.year} onChange={(e)=>{handleInput(e)}} />  <br />
        <input type="text" placeholder='type the brand name' name="brand" value={input.brand} onChange={(e)=>{handleInput(e)}} />  <br />
        <input type="text" placeholder='type the Model' name="model" value={input.model} onChange={(e)=>{handleInput(e)}}/> <br />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default App
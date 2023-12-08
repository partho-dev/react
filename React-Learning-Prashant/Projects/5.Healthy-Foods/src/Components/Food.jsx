import { useState } from "react"

const Food = ({foodList, deleteitems}) =>{
 

    return (
        foodList.length==0 ? <h4> I am Hungry, Add Foods </h4> : 
        <>
        {foodList.map((item, i)=>{return <li key={item} className="item" > {item} 
        <button className="deleteBtn"

        onClick={()=>{deleteitems(i)}}

        >  <i className="fa-solid fa-trash deleteBtn"></i> </button> </li> } ) }
        
        {/* <h4> {newFood} </h4> */}
        </>
    )

}

export default Food;
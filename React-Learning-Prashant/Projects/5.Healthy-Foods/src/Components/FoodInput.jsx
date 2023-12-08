import { useState } from "react";
import Food from "./Food";

const FoodInput = ({inputFn}) =>{
    let [input, setInput] = useState('')

    let enterKeyAdd = (e)=>{if(e.keyCode===13){
        inputFn(input) 
        setInput(" ")
    }}

    return (
        <>
            <input type="text" placeholder="Enter the Food.." className="input-box" value={input}
            
            onChange={(e)=>{setInput(e.target.value)}}
            onKeyDown={enterKeyAdd}
             
            />

            <button className="addBtn" 
            onClick={()=>{inputFn(input) 
            setInput(" ") }} 
            
            // onKeyDown={(e)=>{console.log(e)}}

            > + </button>
        </>
    )
}

export default FoodInput;
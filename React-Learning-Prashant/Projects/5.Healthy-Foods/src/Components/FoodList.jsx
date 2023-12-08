import { useState } from "react";
import Food from "./Food";
import FoodInput from "./FoodInput";
import FoodTitle from "./FoodTitle";

const FoodList = () =>{
    // initial list of food items to start with 
    let [list, setList] = useState(["Chicken", "Rice", "Dal", "Greens", "Salad", "Ghee"])

    // Create a function which will be used to pass as a props to the child element FoodInput 
    // This function takes the input from the input field and it adds the item to the above list 
    let inputFn = (input) =>{
        // Here we are validating to nor update the list if there is nothing added into the input and press add button
        if(input !== " "){
            setList([...list, input])
        }
        // setList([...list, input])
    }

    //This function will be used to remove the item from the list
    let deleteFn = (key) =>{
            let newList = [...list]
            newList.splice(key, 1)
            setList([...newList])
    }

    // let list = ["Chicken", "Rice", "Dal", "Greens"]
    return (
        <>
        <div className="container"> 
                <FoodTitle/>
                <FoodInput inputFn = {inputFn} />
                <Food foodList = {list} deleteitems ={deleteFn}/>
        </div>

        </>
    )
}

export default FoodList;
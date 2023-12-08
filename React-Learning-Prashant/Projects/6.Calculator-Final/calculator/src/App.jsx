import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import Buttons from './components/Buttons';
import { useState } from 'react';

function App() {
const [buttonlist, setButtonlist]=useState(["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "." ])
const [input, setInput] = useState("")

let onclick = (button) =>{
    if(button === "C"){
      setInput("")
    }else if(button === "="){
      let result = eval(input)
      setInput(result)

    }else {
      let newValue = input + button
      setInput(newValue)
    }
}


  return (
    <>
     <div className={styles.calculatorOuter} >
      <Display input={input} />
      <Buttons buttonsList = {buttonlist} onclick={onclick} />

     </div>
    </>
  )
}

export default App

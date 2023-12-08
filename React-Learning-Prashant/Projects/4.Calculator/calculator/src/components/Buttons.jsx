import styles from "./Buttons.module.css"

const Buttons = () =>{
  let buttonsList = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "." ]
  return(
    <div className= {styles.calculatorButtons} >
    {buttonsList.map((buttons)=>{return <button className= {styles.button} > {buttons} </button>})}
    
</div>
  )
}

export default Buttons;
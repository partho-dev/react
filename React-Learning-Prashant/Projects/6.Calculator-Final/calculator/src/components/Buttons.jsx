import styles from "./Buttons.module.css"

const Buttons = ({buttonsList, onclick}) =>{
  // let buttonsList = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "." ]
  return(
    <div className= {styles.calculatorButtons} >
    {buttonsList.map((buttons)=>{return <button key={buttons} className= {styles.button} onClick={ ()=> onclick(buttons)} > {buttons} </button>})}
    
</div>
  )
}

export default Buttons;
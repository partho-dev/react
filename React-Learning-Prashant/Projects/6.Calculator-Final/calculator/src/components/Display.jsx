import styles from "./Display.module.css"

const Display = ({input}) =>{
  return(
  <>
   <input type="text" className={styles.calculatorDisplay} value = {input} readOnly/>
  </>)
}

export default Display;
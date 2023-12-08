import styles from './App.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';
import Buttons from './components/Buttons';

function App() {


  return (
    <>
     <div className={styles.calculatorOuter} >
      <Display/>
      <Buttons/>

     </div>
    </>
  )
}

export default App

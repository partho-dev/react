import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HealthyFood from './components/HealthyFood';
import Student from './components/Student';
import CurrentTime from './components/CurrentTime';

function App() {

  // let foodItems = ["Roti", "Rice", "Dal", "Chicken", "Biriani"]
  let foodItems = []

  let student = [{name : "partho", age : 40},{name : "leia", age : 9}, {name : "Meriya", age : 19} ]

  return (
    <>
      <h5> Healthy Foods </h5>

      {(foodItems.length === 0) ? <h4> Need Food</h4> : null }

      < HealthyFood name = "Partho" cost = {30} />

      {/* Students  Data */} <br />

    {/* <Student name = "Partho" age = {30} />
    <Student name = "Leia" age = {8} /> */}
    {student.map((item)=>{return <Student key ={item.name} name = {item.name} age = {item.age} />})}

    <CurrentTime/>

    </>
  )
}

export default App

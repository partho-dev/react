import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  let foodItems = ["Rice","Protien rich food", "Chicken", "Salad", "Dal", "Oxygen"]
  // let foodItems = []
  let hungry = (foodItems.length === 0) ? <h4> I am hungry</h4> : null //2nd Ternary operator
  return (

    <>
      <ul className="list-group">
        <li className="list-group-item active" aria-current="true">
          Our Healthy Foods
         {/* {(foodItems.length === 0) ? <h4> I am hungry</h4> : null} */}
         {hungry}
        </li>
        {/* <li class="list-group-item">Rice</li> */}
        {foodItems.map((item)=>{return <li key={item} className="list-group-item">{item}</li>})}
      </ul>
    </>
  );
}

export default App;

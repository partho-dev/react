import AddToDo from "./components/AddToDo";
import Appname from "./components/Appname";
import "./App.css";
import ToDoItem from "./components/ToDoItem";

function App() {
  let toDolist = ["Eat", "Run", "Code", "Sleep", "Gym", "Painting"]
  return (
    <>
      <center className="todo-container">
       <Appname/>
       <AddToDo/>
       {toDolist.map((item)=>{return <ToDoItem ToDoName = {item} ToDoDate = {new Date().toLocaleTimeString()} /> })}
       {/* <ToDoItem ToDoName ="Exercise" ToDoDate = {new Date().toLocaleTimeString()} /> */}

      </center>
    </>
  );
}

export default App;

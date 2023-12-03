import AddToDo from "./components/AddToDo";
import Appname from "./components/Appname";
import ToDoItem1 from "./components/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2";
import "./App.css";

function App() {
  return (
    <>
      <center className="todo-container">
       <Appname/>
       <AddToDo/>
       <ToDoItem1/>
       <ToDoItem2/>

      </center>
    </>
  );
}

export default App;

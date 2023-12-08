import { useState } from "react";
import Appname from "./components/AppName";
import AddToDo from "./components/AddTodo";
import ToDoItems from "./components/ToDoItems";
import GoodDay from "./components/GoodDay";
import "./App.css";




function App() {
  // const initialtodoItems = [
  //   {
  //     name: "Run",
  //     dueDate: "4/11/2023",
  //   },
  //   {
  //     name: "Sleep",
  //     dueDate: "4/10/2023",
  //   }
  // ];

  const [todoItems, setTodoItems] = useState([])

  const handleNewItem = (itemName, itemDueDate) =>{
    // console.log(`New item added ${itemName} Date:${itemDueDate}`)
  
    let newTodoitems = {name:itemName, dueDate:itemDueDate }
    let updatedToDoItem = [...todoItems, newTodoitems]
    if(itemName && itemDueDate !== 0 ){setTodoItems(updatedToDoItem)}
    // if(itemName !== 0 && itemDueDate !==0){setTodoItems(updatedToDoItem)}
    // setTodoItems(updatedToDoItem)
  }

  let handleDelete = (key) =>{
    // console.log(`Deleted ${Math.random()} `)
    let newList = [...todoItems]
    newList.splice(key, 1)
    setTodoItems(newList)
  }

  return (
    <center className="todo-container">
      <Appname />
      <AddToDo onNewItem ={handleNewItem}  />
      {/* <GoodDay/> */}
      {todoItems.length==0 && <GoodDay/>}
      <ToDoItems todoItems={todoItems} onDelete={handleDelete} />
    </center>
  );
}

export default App;
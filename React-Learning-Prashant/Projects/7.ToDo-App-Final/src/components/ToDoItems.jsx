import ToDoItem from "./TodoItem";
// import styles from "./TodoItems.module.css";

const ToDoItems = ({ todoItems , onDelete }) => {
  return (
    <div >
      {todoItems.map((item, i) => (
        <ToDoItem  key={i} todoDate={item.dueDate} todoName={item.name} onDelete ={()=>{onDelete(i)}} />
      ))}
    </div>
  );
};

export default ToDoItems;
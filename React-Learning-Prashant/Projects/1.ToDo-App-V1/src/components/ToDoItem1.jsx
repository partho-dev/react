function ToDoItem1(){
  let ToDoName = "Buy Milk"
  let ToDoDate = "23/10/2023"
  return(    
    <div class="container text-center">      
  <div class="row">
  <div class="col-6">
    <h4> {ToDoName} </h4>
  </div>
  <div class="col-4">
    <h4> {ToDoDate} </h4>
  </div>
  <div class="col-2">
  <button type="button" class="btn btn-danger button">Delete</button>
  </div>
</div>
</div>)
}

export default ToDoItem1;
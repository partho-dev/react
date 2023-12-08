import { useState } from "react";

function AddToDo({onNewItem}) {

  const [name, setName] = useState()
  const [date, setDate] = useState()

  const handleToName = (event) =>{
      setName(event.target.value)
      // setName()
  }


  const handleToDate = (event) =>{
    setDate(event.target.value)
    // setDate()
}

const handleAddClicked = () =>{
  onNewItem(name, date)
  setName("")
  setDate("")
}

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={name || ""} onChange={handleToName} />
        </div>
        <div className="col-4">
          <input type="date" value={date || ""} onChange={handleToDate} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
          onClick={handleAddClicked}
          
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
import React, { useState } from 'react'
import Todo from './Components/Todo'

const App = () => {
  const [text, setText]=useState()
  const [items, setItems] = useState([])

  const useInput = (event) =>{
      // console.log(event.target.value)
      setText(event.target.value)
  }

  const useAddbtn = (e)=>{
      e.preventDefault()
      if(text.trim().length !== 0){
      setItems((prev)=>[...prev, text])
    }
    setText("")
  }

  const useDeleteBtn = (itemIndex)=>{
    let filteredItem = items.filter((item, index)=>{return itemIndex!==index})
    setItems(filteredItem)
  }

  const useEditBtn = (editIndex)=>{
    // items.map((item, index)=>{if(editIndex === index) setText(item)})
    let editedIndex = items.find((item, index)=>{editIndex === index})
    if(editedIndex){
      setText(editedIndex)
    }
  }

  return (
    <div>
      <Todo text = {text} useInput={useInput} useAddbtn={useAddbtn} items={items} useDeleteBtn={useDeleteBtn} useEditBtn={useEditBtn} />
    </div>
  )
}

export default App

- Form is very important, as it collects the data from user and thats what the applications are made for. Make business decisions based on user data.
- The data collection through form has many challenges
    - Page refresh loses the Reract state and react deals with data using state
    - So, the default browser has a tendancy to reload the page upon any submit 
    - We need to prevent that.
- React needs to store each data in state variable and then show them

## Lets try to understand the pain of collecting data through form on React
- We have to do everything manually
    - manage and prevent the default behaviour of browser
    - handle the change of each input field
    - update the state upon Submission
    - map the array(If any) or list the item from state variable

- Form with single input and a submit button and show the input with h1

```
import React, {useState} from 'react'

const App = () => {
const[inputItem, setInputItem] = useState()
const [data, setData] = useState([])

const handleChange = (e) =>{
  setInputItem(e.target.value)}

const handleSubmit  = (e) =>{
  e.preventDefault()
  if(inputItem.trim().length!==0 ){
    setData([...data, inputItem])
    setInputItem(" ")
  }}

  return (
    <>
    <div>
      <input type="text" placeholder='Your name' value={inputItem} onChange={handleChange}  />
      <button onClick={handleSubmit}> Submit </button>
    </div>
    <div>
      {data.map((elem, index) => <h1 key={index}> { `${index+1}. Name is: ${elem}`} </h1>)}
    </div>
    </>
  )}

export default App
```
Output : 
<img width="246" alt="form-react-1" src="https://github.com/partho-dev/react/assets/150241170/4cffdc55-f998-4211-880d-d11c4f614d4a">

- Form with multiple input fields

- Form is very important, as it collects the data from user and thats what the applications are made for. Make business decisions based on user data.
- The data collection through form has many challenges
    - Page refresh loses the React state and react deals with data using state
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
    - Lets try to create a form with two input fields and get the output as h1
    - Here, we will have to create two seperate onchange handler for two different input fields
    - Once the submit button is clicked, all the values stored in an object gets stored on a different Array
    
    ```
            import React, { useState } from 'react'

            const App = () => {
            // objects
            const [item, setItems] = useState({name:"",  age:""})
            const [ data, setData] = useState([])
            
            // Create two seperate change handler for two different input fields
            // onchange handler for Name input field
            const handleName = (e)=>{
                setItems((prev)=>{
                return { ...prev, name:e.target.value}
                })
            }
            // onchange handler for Age input field
            const handleAge = (e)=>{
                setItems((prev)=>{
                return { ...prev, age:e.target.value}
                })
            }

            const handleSubmit = (e)=>{
                e.preventDefault()
                setData((prev)=>[...prev, item])
                setItems({name:"",  age:""})
            }

            return (
                <>
                <div>
                <form >
                    <input type="text" placeholder='Type your name' value={item.name} onChange={handleName} />
                    <input type="email" placeholder='Type your email'  value={item.age} onChange={handleAge} />
                    <input onClick={handleSubmit} type="submit" />
                </form>
                </div>
                <div>
                { data.map((elem, index)=> (
                    <h1 key={index}> My name is {elem.name} & I am {elem.age} years old</h1> ))
                }
                </div>
                </>
            )
            }

            export default App
    ```
Note : On the above, we had to write the onchange method twice for two different input fields.
We can write that under on onchange hander, for that we have to do these
- We have to use `name` attribute on the input type, 
- Here, the onchange hander is not yet ready, so its not attached to the input yet.
```
    <input type="text" placeholder='Type your name' name='name' value={item.name} />
    <input type="email" placeholder='Type your email' name='email' value={item.email} />
```
- Then create the onchange handler
```
<!-- Remove these two -->
  // const handleName = (e)=>{
  //   setItems((prev)=>{
  //     return { ...prev, name:e.target.value}
  //   })
  // }

  // const handleAge = (e)=>{
  //   setItems((prev)=>{
  //     return { ...prev, age:e.target.value}
  //   })
  // }

<!-- Alternatively, just make one -->
  const handleOnChange = (e)=>{
    const {name, value} = e.target
    setItems((prev)=>({...prev, [name]:value}))
  }
```

- Then add the same handler on both the inputs

```
<input type="text" placeholder='Type your name' name='name' value={item.name} onChange={handleOnChange} />
<input type="email" placeholder='Type your email' name='email' value={item.email} onChange={handleOnChange} />
```

<img width="421" alt="form-react-2" src="https://github.com/partho-dev/react/assets/150241170/9608f272-e6cc-4d88-86c1-74659c7e170c">

## This clearly is not an ideal solution to handle Form using these manual way
- There is a package which is widely used for form which does all the heavy lifting
- package name `react-hook-form` from `https://www.react-hook-form.com/`
- npm install react-hook-form
- This gives one hook `useForm()`
- `useForm()` gives the below methods
    - `register()`: Used to register inputs.
        - register() provides these, & so we need to write very less codes
            - onchange()
            - onBlur()
            - ref
    - `handleSubmit()`: Handles form submission.
    - `watch()`: Watches the form state

- `<input type="text" placeholder="Type your name" {...register("name")} />`
- {...register()} - we spread to get all e functions inside that input 
- We cant write our own handleSubmit() handler, we have to use their handleSubmit(), which takes `data` as a parameter, here data are the input field key name like `name` `email` which is used to control the register function like this {...register(name)}

```
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
  const [submitData, setSubmitData] = useState([])
  const { register, handleSubmit, reset , watch} = useForm()
  console.log(register())

  const onSubmit = (data) => {
    // console.log(data)
    setSubmitData((prev)=>[...prev, data])
    reset();
  }
  // const data = watch()

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="text" placeholder="Type your name" {...register("name")} />
          <input type="email" placeholder="Type your email" {...register("email")} />
          <input type="Submit" />
        </div>
      </form>
      <div>
        {submitData.length > 0 ? (
          submitData.map((elem, index) => (
          <h1 key={index}> My name is {elem.name} </h1> 
          )) 
        ) : (<h1> No Data found </h1>
        )}
      </div>
    </>
  )}

export default App
```

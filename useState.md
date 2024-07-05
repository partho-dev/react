- In React we cant change the value directly through local variable
& so, react has given a concept called `state variable`
- This allows to change the value of any variable upon some `event` and that stores into the variable and that is shown to the UI

- The hook which is used is `useState()` hook
<img width="777" alt="useState-manual" src="https://github.com/partho-dev/react/assets/150241170/70a0eaaa-30a4-432f-b8e3-18ebb7b36a93">

<img width="708" alt="useState-prev" src="https://github.com/partho-dev/react/assets/150241170/7a6e1f94-0d71-4baa-b006-62b5e493a7f1">

- `setState` can not be `updated(mutated) manually`, it can only be updated upon any `event` that is making some changes in the DOM
- When the state changes in React, a process called `reconciliation` occurs. React creates a `virtual DOM` representation of the updated state, compares it with the previous virtual DOM, and then updates only the parts of the actual DOM that have changed. This process is known as the Virtual DOM `diffing algorithm`.

- So, while the entire virtual DOM is considered for optimization, only the necessary changes are applied to the real DOM to minimize the performance impact. This is one of the key features of React that helps improve efficiency in rendering updates.

- In the application, if there is any scenario comes where there is something changes based on some `event` like `click of a button`, think of  `()` and whatever that needs to be changed, put that in the `state variable`.

- If a new element needs to be created upon clicking on a button for an existing state variable, we need to preserve the old array and then add the new element in the array
```
[…name, “John”]

```
![useState-old](https://github.com/partho-dev/react/assets/150241170/4e0d97e2-d3b7-4956-891f-c6c4d345028a)

- `Data` flows from top to botttom method, from `parent 2 child`
- The state is also created on the parent component, but, if the state needs to be updated based on some action like `button click` on `child` component, that can be possible by passing a `function` from parent to child as a `prop`. 

## Showing repetitive components on UI

If we want to show 2 cards on UI, we will create a child component as Cards and show them twice into parent component.
And if we want to show content on the card, we pass props from parent to the child card component.
![child-props](https://github.com/partho-dev/react/assets/150241170/2be95fca-f8fb-4760-9485-12263a2b9850)

![parents-props](https://github.com/partho-dev/react/assets/150241170/27d5eca2-fdc2-45b3-9291-f877bfa96530)

![result](https://github.com/partho-dev/react/assets/150241170/30f6ee9a-9abb-4dc9-a18a-d75e680897fa)

But, the above process is not scalable, as we would Never know how many cards are needed to be shown while data increases.
So, we can get these cards created dynamically based on the data.

![scalable](https://github.com/partho-dev/react/assets/150241170/e7d5677f-db74-47fa-856d-3955729b50f0)

On the child component, the props can be accepted the way we sent `...item`

```
const Cards = ({...item}) => {
    // Destructure the object properties
    const {content, cost} =item
}
```

![result](https://github.com/partho-dev/react/assets/150241170/e8ff5cdf-c6e8-4e0b-9537-0d28722e873f)

### Lets understand the updating the state in the Parent component based on some event on the child component

1. Data Handling happens in the Parent Component: Most of the time, state management (e.g., using setVal) happens in the parent component because that's where the state is usually maintained and the data stays there as well.

```
const App = () => {

// Data
  let cars = [
    {price:"1000", model:"Maruthi", year:"2014", Km:"100", added:false},
    {price:"2000", model:"Hyundai", year:"2015", Km:"200", added:true}
  ]

// Managing the state
  const [data, setdata]=useState(cars)

  return (
    <div className='bg-cyan-800 w-full h-screen py-1'>
      <div className='mt-10 flex items-center p-10 gap-10 flex-wrap '>
      {data.map((item, index)=>{

        //Passing the mapped item as a prop to the child component
        return <Cards {...item} />
      })}
      </div>
   
    </div>
  )
}

export default App
```
2. Child Component Interaction: If we want to have some change on state based on button click on Cards child component, we have to pass a function as a prop to the Cards component from the parent component. 

```
App.jsx

// Create a function which responds based on child events
 const handleClick = (index)=>{
    alert(`You have clicked on ${index+1} no card`)
  }

  return (
    <div className='bg-cyan-800 w-full h-screen py-1'>
      <div className='mt-10 flex items-center p-10 gap-10 flex-wrap '>
      {data.map((item, index)=>{

        //Passing the mapped item as a prop to the child component & pass the function as a prop now
        return <Cards data = {item} handleClick={handleClick} />
      })}
      </div>
   
    </div>
  )
```
**On the child**
3. Passing Functions as Props: To make this function available in the child component, pass it as a prop to the child component. It's crucial not to execute the function during the prop passing, just pass the reference to the function.
```
// Accept the function as a prop
const Cards = ({data, handleClick, index}) => {}

//accept that on the button and pass the event to parent component
// Just pass the reference
<button onClick={handleClick} Click </button>

// But as our function needed to know the index of the card, so we need to pass the index value to the function, so we are making that function executable, 
// To make it executable, the click function needs to pass a call back function and there we will make our custom function executable, once the call back function is called upon button clicked
<button onClick={()=>handleClick(index)} Click </button>

```
![parent](https://github.com/partho-dev/react/assets/150241170/690e1a98-8f8d-4b1a-8445-7b2f01d4b81a)

![child](https://github.com/partho-dev/react/assets/150241170/e5e5c5ef-f451-4f59-af73-be4facc4dab1)


## Practise - useState for `Objects` - Array of objects [{}, {}]
1. first add objects, create an input box and once it fills, the data gets filled into the object
2. Create more than one input box and once submit all the input box data to be stored in an object - 
    1. use the “name” attribute on the inout box
    2. try to define the object  of useState() with key as the name and value empty 

## React Routing and Dynamic Routing
1. install react router dom
2. go to main.jsx
3. wrap App component inside 
```
<BrowserRouter>  
    <App/> 
<BrowserRouter/>

```
4. go to App.jsx - import `{Link}` from react router dom
5. inside the App, create the nav or navLink 
    ```
      <Link to=“/”>  Home </Link>
      <Link to=“/about”>  About </Link>
    ```
6. After the nav is set, create the Routes for those nav on same app.jsc
```
<Routes>           
    <Route path=“/“ element={<Home/>} />          
    <Route path=“/about“ element={<About/>} /> 
</Routes>
```
## React context  
- we have to even wrap the <BrowserRouter> <App/>  inside context [ Its a react thing, so no need to install]

```
<Context>   
    <BrowserRouter>      
    <App/> 
    <BrowserRouter/>
</Context>
```
### Process of creating a component 
- First create a `component` named `Context` 
- Then go to App component and add the <BrowserRouter> <App/>  inside the <Context> 
- Now, go to Context component and get all the data from anyone as `props` 
```
const Context(props){}
```
- Then `return props.children`
```
const Context(props){
    return props.children }
```

## useState() for different Data types
1. `Number` Datatypes

```
        const App = () => {
        // useState for "Number" datatypes
        const[count, setCount] = useState(0)
        const handleClick = ()=>{
            setCount((prev)=>prev+1)
        }
        return (
            <div>
            <h1> Number is: {count}  </h1>
            <button onClick={handleClick}> Increase the number</button>
            </div>
        )
        }
```

2. `String` Data type

```
        import React, { useState } from 'react'

        const App = () => {
        // useState for string data types
        const [name, setName] = useState("")
        const handleChange = (e) =>{
            setName(e.target.value)
        }
        return (
            <div>
            <>
            <label htmlFor="name"> Name:  </label>
            <input id='name' type="text"  placeholder='Type your name' value={name} onChange={handleChange} />
            {name.trim().length==0 ? <p> No name entered Yet</p> : <h1> My Name is: {name} </h1> }
            </>
            </div>
        )
        }

        export default App
```

3. `Boolean` Data type
    - Conditional randering based on the boolean value

```
        import React, { useState } from 'react'

        const App = () => {
        // Boolean
        const [status, setStatus] = useState(true)
        const handleButton = () =>{
            // setStatus(!status)
            setStatus((prev)=>!prev)
        }
        return (
            <div>
            {/* {status? <h1> User is now : Logged-In </h1>: <h1>  User is now : Logged-Out </h1>} */}
            <h1> The user is now: {status? "Logged-In" : "Logged-Out"} </h1>
            <button  onClick={handleButton} className='px-2 py-1 bg-blue-300 rounded-md text-xs'> Click </button>
            </div>
        )
        }

        export default App

```

4. Data Types `Array`

- How to `Add` & `Delete` items into the Array
- To Delete the last element from the array 
    - Use `slice()` method on the array.
    - or use filter() method also 
    - `setNumber((prev)=> prev.filter((elem, index)=> index!== prev.length-1 ))`
- To Delete only the odd or even element 
    - `setNumber((prev)=> prev.filter((elem, index)=> elem%2!==0 ))`
- To Add 
    - find the length of the array and then add +1 to the array length.

```
            import React, { useState } from 'react'

            const App = () => {
            //Array []
            const [ number, setNumber] = useState([1, 2, 3, 4, 5, 6])
            const handleAdd = ()=>{
                setNumber((prev)=>[...prev, prev.length+1])
            }

            const handleDelete = ()=>{
                // setNumbers((prev) => prev.slice(0, -1)) // Use slice method to delete the element from array
                setNumber((prev)=> prev.filter((elem, index)=> index!== prev.length-1 ))
            }

            return (
                <div>

                {number.map((elem, index)=> <h1> The number is: {elem} </h1>)}
                <button className='px-2 py-1 bg-blue-400 rounded-md mt-5 ml-2 text-xs' onClick={handleAdd}> Add </button>
                <button className='px-2 py-1 bg-blue-400 rounded-md mt-5 ml-2 text-xs' onClick={handleDelete}> Delete </button>
                
                </div>
            )
            }

            export default App
```

5. `Object` data types
    - This is mostly used during form filling as it contains key:value pairs
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
        const handleName = (e)=>{
            setItems((prev)=>{
            return { ...prev, name:e.target.value}
            })
        }

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
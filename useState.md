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


**Scenerio** : Child has a input field and a button, the items entered into the input field should be shown as h1 once you click on button 
## How to proceed with the `Logic` 
1. Two state variables would be needed
    * One state vatiable for the items that are typed on the `input box` 
    * Another state variable is for the lists of items that are getting stored after clicking on `add button`

```
const[item, setItem] =  useState("")
const [list, setList] = useState([]) 
```

### Handle the state variables from the input box 
```
const handleChange = (e)=>{
      setItem(e.target.value)
  }
```
### Handle the state variables when click on Add button
```
const clickAddbtn = (e) =>{
    e.preventDefault(); /*This is used if we use form tag*/
    if(item.trim().length !==0) {
      setList((prev)=>[...prev, item])
      setItem("") /** To empty the input box */
    }}
```
![child](https://github.com/partho-dev/react/assets/150241170/254020c0-13f6-484d-b35c-6c76194474b5)


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

## React Animation for Marquee effect.
1. install framer motion :  npm i framer-motion
2. import `{ motion }` from `"framer-motion"`
3. Then apply that to the element you want the animation [`h1` or `Div` etc]
```
<motion.div initial={{x:0}} animate={{x: 3, y: -60, scale: 0.7, rotate: 0, }} transition={{ease:”linear”, repeat:”infinity”, duration:””5}}/>
```

## React, enable Back button to navigate to the previous page
1. import `useNavigate()` 
    const navigate = useNavigate()
2. Now, on the back `button`, inside the `onclick(()=>{navigate(—1)})` 
// Here -1 takes to the previous page


## React - Once you click on user, it should routes to /user/:id and gives the user detail page info
1. on the nav route, set the route for dynamic route
```
<Routes>
<Route path='/user/:id' element={<UserDetails/>} />
</Routes>
```
2. Now, go to <UserDetails/> component
```
import useParams from 'react-router-dom'

const {id} = useParams()
const {users} = useContext(userContext) 
```

## How to Show unique category
```
const [products] = useContext(productContext)
  let uniqueCategory = products && products.reduce((p, c)=>[...p, c.category], [])
  uniqueCategory = [...new Set(uniqueCategory)]
```


## Randomly changing the color of certain element
1. Write a function
```
  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, 0.3)`
  }
```
2. then apply that function to that element background color or any other color
```
<span style={{backgroundColor:color()}} className=' inline-block w-2 h-2 rounded'> </span> 
```

## How to find Query Parameter from the URL :  http://localhost:5173/?category=electronics 
1. find `electronics` from here
```
import {useLocation} from “react-router-dom”
const {search} = useLocation()
console.log(` Search is: ${search}`) => Search is: ?category=men%27s%20clothing
```

2. To find the category : spilt that with `=` and look for its `1st index value`
```
const category = search.split("=")[1]
console.log(` Category is: ${category}`)  = > Category is: electronics
```

## How to clean this kind of category : Category is: men%27s%20clothing
- Wrap the search split inside `decodeURIComponent()`
```
 const category = decodeURIComponent(search.split("=")[1])
  console.log(` Category is: ${category}`) => Category is: men's clothing
```
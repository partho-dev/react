In React we cant change the value directly through local variable
& so, react has given a concept called "state" variable
This allows to change the value of any variable upon some event and that stores into the variable and that is shown to the UI

- The hook which is used is `useState()` hook
- <img width="777" alt="useState-manual" src="https://github.com/partho-dev/react/assets/150241170/70a0eaaa-30a4-432f-b8e3-18ebb7b36a93">
- <img width="708" alt="useState-prev" src="https://github.com/partho-dev/react/assets/150241170/7a6e1f94-0d71-4baa-b006-62b5e493a7f1">

setState can not be updated(mutated) manually, it can only be updated upon any event that is making some changes in the DOM
When the state changes in React, a process called reconciliation occurs. React creates a virtual DOM representation of the updated state, compares it with the previous virtual DOM, and then updates only the parts of the actual DOM that have changed. This process is known as the Virtual DOM diffing algorithm.
So, while the entire virtual DOM is considered for optimization, only the necessary changes are applied to the real DOM to minimize the performance impact. This is one of the key features of React that helps improve efficiency in rendering updates.

In the application, if there is any scenario comes where there is something changes based on some event like click of a button, think of  () and whatever that needs to be changed, put that in the state variable.

If you want to add new element upon clicking on a button for an existing state variable, you need to preserve the old array and then add the new element in the array
	[…name, “John”]
![useState-old](https://github.com/partho-dev/react/assets/150241170/4e0d97e2-d3b7-4956-891f-c6c4d345028a)

When you have a state variable in the parent component and want to update it based on an action or event in the child component, the typical pattern is to define a function in the parent component that performs the state update and then pass this function as a prop to the child component.
Here's a summary of your correct understanding:
* 		Data Handling in Parent Component: Most of the time, state management (e.g., using setVal) happens in the parent component because that's where the state is usually maintained.
* 		Child Component Interaction: When you want to trigger state changes based on events or actions in the child component, you create a function in the parent component to handle the state update.
* 		Passing Functions as Props: To make this function available in the child component, you pass it as a prop to the child component. It's crucial not to execute the function during the prop passing, just pass the reference to the function.
* 		Using Function in Child Component: Inside the child component, you call the function passed as a prop when a specific event occurs (e.g., a button click). This way, the child component can signal the parent to update the state.
This approach follows the principles of React's one-way data flow, where state is managed in a parent component and actions in child components trigger updates through callback functions passed as props.


![parent](https://github.com/partho-dev/react/assets/150241170/690e1a98-8f8d-4b1a-8445-7b2f01d4b81a)

![child](https://github.com/partho-dev/react/assets/150241170/e5e5c5ef-f451-4f59-af73-be4facc4dab1)



Showing repetitive components on UI

If we want to show 2 cards on UI, we will create a child component as Cards and show them twice into parent component.
And if we want to show content on the card, we pass props from parent to the child card component.
![child-props](https://github.com/partho-dev/react/assets/150241170/2be95fca-f8fb-4760-9485-12263a2b9850)

![parents-props](https://github.com/partho-dev/react/assets/150241170/27d5eca2-fdc2-45b3-9291-f877bfa96530)

![result](https://github.com/partho-dev/react/assets/150241170/30f6ee9a-9abb-4dc9-a18a-d75e680897fa)

But, the above process is not scalable, as we would Never know how many cards are needed to be shown while data increases.
So, we can get these cards created dynamically based on the data.

![scalable](https://github.com/partho-dev/react/assets/150241170/e7d5677f-db74-47fa-856d-3955729b50f0)

![result](https://github.com/partho-dev/react/assets/150241170/e8ff5cdf-c6e8-4e0b-9537-0d28722e873f)


Child has a input field and a button, the items entered into the input field should be shown as h1 once you click on button 
— You would need to have two state variables 
— One for the items that are typed on the input box 
— one for the lists of items that are getting stored after clicking on add

const[item, setItem] =  useState("")
const [list, setList] = useState([]) 

Handle the state variables from the input box -  
const handleChange = (e)=>{
      setItem(e.target.value)
  }

Handle the state variables when click on Add button
const clickAddbtn = (e) =>{
    e.preventDefault(); /*This is used if we use form tag*/
    if(item.trim().length !==0) {
      setList((prev)=>[...prev, item])
      setItem("") /** To empty the input box */
    }}


![child](https://github.com/partho-dev/react/assets/150241170/254020c0-13f6-484d-b35c-6c76194474b5)


useState for Objects - Array of objects [{}, {}]
1. first add objects, create an input box and once it fills, the data gets filled into the object
2. Create more than one input box and once submit all the input box data to be stored in an object - 
    1. use the “name” attribute on the inout box
    2. try to define the object  of useState() with key as the name and value empty 
React Routing and Dynamic Routing
1. install react router dom
2. go to main.jsx
3. wrap App component inside <BrowserRouter>      <App/> <BrowserRouter/>
4. go to App.jsx - import {Link} from react router dom
5. inside the App, create the nav or navLink 
    1. <Link to=“/”>  Home </Link>
    2. <Link to=“/about”>  About </Link>
6. After the nav is set, create the Routes for those nav on same app.jsc<Routes>           <Route path=“/“ element={<Home/>} />          <Route path=“/about“ element={<About/>} /> </Routes>
7. For context - we have to even wrap the 3rd point inside context [ Its a react thing, so no need to install<Context>   <BrowserRouter>      <App/> <BrowserRouter/></Context>
8. But for Context - first create a component named Context 
9. Then go to App component and do step 7th
10. go to Context component and get all the data from anyone as props const Context(props){}
11. Then return props.childrenconst Context(props){             return props.children                 }


React Animation for Marquee effect.
1. install framer motion :  npm i framer-motion
2. import { motion } from "framer-motion"
3. Then apply that to the element you want the animation [h1 or Div]
4. <motion.div initial={{x:0}} animate={{x: 3, y: -60, scale: 0.7, rotate: 0, }} transition={{ease:”linear”, repeat:”infinity”, duration:””5}}/>


React, enable Back button to navigate to the previous page
1. import useNavigate()const navigate = useNavigate()
2. Now, on the back button, inside the onclick(()=>{navigate(—1)}) // Here -1 takes to the previous page


React - Once you click on user, it should routes to /user/:id and gives the user detail page info
on the nav route, set the route for dynamic route
<Routes>
<Route path='/user/:id' element={<UserDetails/>} />
</Routes>

Now, go to <UserDetails/> component
import useParams from 'react-router-dom'

const {id} = useParams()
const {users} = useContext(userContext) 


Show unique category
const [products] = useContext(productContext)
  let uniqueCategory = products && products.reduce((p, c)=>[...p, c.category], [])
  uniqueCategory = [...new Set(uniqueCategory)]

Randomly changing the color of certain element

Write a function
  const color = ()=>{
    return `rgba(${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, ${(Math.random()*255).toFixed()}, 0.3)`
  }

then apply that function to that element background color or any other color
<span style={{backgroundColor:color()}} className=' inline-block w-2 h-2 rounded'> </span> 


How to find Query Parameter from the URL :  http://localhost:5173/?category=electronics 
find “ electronics” from here

import {useLocation} from “react-router-dom”
const {search} = useLocation()
console.log(` Search is: ${search}`) => Search is: ?category=men%27s%20clothing

To find the category : spilt that with “=“ and look for its 1st index value
const category = search.split("=")[1]
console.log(` Category is: ${category}`)  = > Category is: electronics

How to clean this kind of category : Category is: men%27s%20clothing
Wrap the search split inside decodeURIComponent()

 const category = decodeURIComponent(search.split("=")[1])
  console.log(` Category is: ${category}`) => Category is: men's clothing



Start a new project in React.
npm install these packages - react-router-dom react-hot-toast react-icons
tailwind related packages - Update the config files


Ctr+Space = To get the suggestion for Tailwind CSS

To have glass effect on website using tailwind CSS, we can generate that from this website - https://tailwindcss-glassmorphism.vercel.app/


For having readymade style component for tailwind, we can use  flowbite - for table we can see this https://flowbite.com/docs/components/tables/

If there are some items with both short and long descriptions, but, we want to keep the UI as consistant and maintain description of one line.
Description : {description ? description : “No Description provided”} — This will show inconsistant lines
To maintain a consistant of 100 words per description, we can use slice(0, 100)
Desscription : {description ? description.slice(0, 100): “No Description Provided”} —> This will ensure to maintain a consistancy on UI

To copy something on clipboard, we can use default windows property called - navigator
1. First create a button - Copy Btn
2. enable click handler - onClick(()=> handleClick(items_copy)  )
3. create the click function - const handleClick = async (items_copy) =>{       await navigator.clipboard.writeText(items_copy)       toast.success(“Copied  ”)        }


Redux flow

Component  gets the data from Store using the useStore() hook

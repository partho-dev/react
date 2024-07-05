## Few important information 
1. Start a new project in React.
    - npm install these packages - `react-router-dom react-hot-toast react-icons`
    - tailwind related packages - Update the config files

2. Ctr+Space = To get the suggestion for Tailwind CSS

3. To have glass effect on website using tailwind CSS, we can generate that from this website - https://tailwindcss-glassmorphism.vercel.app/


4. For having readymade style component for tailwind, we can use  flowbite - for table we can see this https://flowbite.com/docs/components/tables/

5. If there are some items with both `short` and `long descriptions`, but, we want to keep the UI as consistant and maintain description of one line.

- Description : {description ? description : “No Description provided”} — This will show inconsistant lines
- To maintain a consistant of 100 words per description, we can use `slice(0, 100)`
- Desscription : {description ? description.slice(0, 100): “No Description Provided”} —> This will ensure to maintain a consistancy on UI

6. To copy something on clipboard, we can use default windows property called - `navigator`
    - First create a button - `Copy Btn`
    - enable click handler on the button - `onClick(()=> handleClick(items_copy)  )`
    - create the click function on component 
        ```
         const handleClick = async (items_copy) =>{       
            await navigator.clipboard.writeText(items_copy)       
            toast.success(“Copied  ”)        }
         ```


7. ## React Animation for Marquee effect.
    1. install framer motion :  npm i framer-motion
    2. import `{ motion }` from `"framer-motion"`
    3. Then apply that to the element you want the animation [`h1` or `Div` etc]
```
    <motion.div initial={{x:0}} animate={{x: 3, y: -60, scale: 0.7, rotate: 0, }} transition={{ease:”linear”, repeat:”infinity”, duration:””5}}/>
```

8. ## React, enable Back button to navigate to the previous page
    1. import `useNavigate()` 
    const navigate = useNavigate()
    2. Now, on the back `button`, inside the `onclick(()=>{navigate(—1)})` 
    // Here -1 takes to the previous page


9. ## React - Once you click on user, it should routes to /user/:id and gives the user detail page info
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

10. ## How to Show unique category
```
const [products] = useContext(productContext)
  let uniqueCategory = products && products.reduce((p, c)=>[...p, c.category], [])
  uniqueCategory = [...new Set(uniqueCategory)]
```


11. ## Randomly changing the color of certain element
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

12. ## How to find Query Parameter from the URL :  http://localhost:5173/?category=electronics 
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

13. ## How to clean this kind of category : Category is: men%27s%20clothing
    - Wrap the search split inside `decodeURIComponent()`
    ```
    const category = decodeURIComponent(search.split("=")[1])
    console.log(` Category is: ${category}`) => Category is: men's clothing
    ```
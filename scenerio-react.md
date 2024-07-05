**Scenerio** : 3 components, Parent(App), two child(Navbar & Cards)
- App is main component, so all data would be there on parent component

    ```
    const data = [
        {name:"product_name-1", price:"cost-1", added:true},
        {name:"product_name", price:"cost-2", added:false},
        ]
    ```
    
- Nav Bar - It has a Cart icon and it increases the count once the `Add` button on Card component is clicked.

Logic building
1. The `data` is a variable, this is good to keep this way, untill there is no change needed based on any action
2. But, the property `added` needs to be changed to `true` or `false` upon some event like `add` button
3. So, we need useState() hook to store the data on state variable and a function that changes the value of data upon some event.
4. So, enable useState() 
```
   const data = [
        {name:"product_name-1", price:"cost-1", added:true},
        {name:"product_name", price:"cost-2", added:false},
        ]
    
    const[productData, setProductData] = useState(data)
```
5. On the parent component - loop the `productData` for `Cards` component
6. Then, pass the loop element as a prop to the child cards component
```
  return (
    <div>
      <Navbar/>
      {productData.map((elem, index)=>{return <Cards key={index} data={elem} />})}
      </div>
    </div>
  )
```
7. Receive the prop on cards component 
    - while passing the props, send the value `{elem}` in a variable `data`
    - So, while receiving the prop on child, receive as an object `{data}` &
    - then destructure the properties of the object
```
const Cards = ({data}) => {
    const {name, price, added} = data
}

```
8. The button name should be changes to `added` if the value of added is true `added:true`
    - Here, we need to do conditional rendering
    - without any conditional rendering 
        `<button className='px-2 py-1 bg-blue-200 rounded-md text-xs'> Add </button>`
    - With condition Rendering 
    ```
    <button className='px-2 py-1 bg-blue-200 rounded-md text-xs'> 
      {added===true?"Added":"Add"} 
      </button>
    ```
9. Sometimes, the color of button also need to be changed based on condition, 
    - for that we need to work on the tailwind class
    - wrap the class within `{}`
    - remove the " " & add ` `` `
    - use ES6 ${ condition goes here}
    - the value should be inside " " as its a string
    ```
    <button className={`px-2 py-1 ${added?"bg-blue-200":"bg-green-200"} rounded-md text-xs`}> 
      {added?"Added":"Add"} 
      </button>
    ```
10. Now, enable click event on Cards component and change the value of `added:true` or `added:false`
    - This will dynamically change the button content & color based on above conditions mentioned on 8th & 9th step
    - Need to know which card, we are clicking, so that the `elem` looks for the value of `added` on that element 
    - To do that we have to enable `index` to identify
    - We will pass index into the click event and that would update the function on Parent component.
    - Changes happening because of child component event gets transferred into parent data through a function which needs to be created on parent component
        - On the parent component, create a function
        - send that function to `Card` component as a prop and send the mapped `index` also as prop
        - The function is to update the state variable
    ```
            const handleClick = (index)=>{
            // setProduct needs a new array from its original array(prev)
            setProductData((prev)=>{
            // So, it returns the new array by mapping the prev array - return keywork
            // map needs two arguments, one elem and another the dataIndex
            return prev.map((elem, dataIndex)=>{
                // if there is no condition, it returns the entire prev to setProduct
                // But, here we need to check on which card the button was clicked, so we are matching if the index of card and index of prev matches
                if(dataIndex===index){
                // if that matches, update the entire object element, just change the property of added to the opposite of what was there before
                return {...elem, added:!elem.added}
                }
                return elem
            })
            })
        }
    ```

- Send this function as a prop to Child component - Cards
```
{productData.map((elem, index)=>{return <Cards key={index} data={elem} index={index} handleClick={handleClick} />})}
```
- Receive that on child

```
const Cards = ({data, index, handleClick})
```
- pass that on the button with an arrow function, to avoid the function execute immediately

```
   <button className={`px-2 py-1 ${added?"bg-blue-200":"bg-green-200"} rounded-md text-xs`}
      onClick={()=>handleClick(index)}
      > 
      {added?"Added":"Add"} 
      </button>
```
11. Now, based on the Added, the `cart` value of another component `Navbar` should also be updated
    - Since the updated array after add button event is updated into the state variable `productData`
    - so, sending that as a prop to the `Navbar` component
    ```
    <Navbar data = {productData} />
    ```
    - Receive that on `Navbar` component
    - And then filter the array and find the value of added:true and count its length
    ```
        const Navbar = ({data}) => {

        return (
            <div className='flex gap-2'>
            <h1> Cart </h1>
            {/* Use filter method to filter out anything which does not match the condition of
            elem.added === true, that mean, it will not count elem.added:false 
            & then count how many are there with elem.added as true */}
            <h1> {data.filter(elem=>elem.added).length} </h1>
            </div>
        )
        }
    ```


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


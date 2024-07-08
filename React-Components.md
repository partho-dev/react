## Components 
Create a functional component
- `rafce`
- create one using rafce - It automatically takes the function name as the name of the component file name
<img width="1042" alt="React-Component" src="https://github.com/partho-dev/react/assets/150241170/ab5f3ac4-75f3-488b-b58d-08d9597d3ad6">

## How we can use one components into another components
1. Lets have an App components 
<img width="533" alt="app" src="https://github.com/partho-dev/react/assets/150241170/940c1f39-60bb-459c-bfef-c011e42a6de5">

2. And a Card components seperately
3. Show the card components inside app components
<img width="867" alt="Cards" src="https://github.com/partho-dev/react/assets/150241170/6e291503-69cf-4eda-b4fa-aabe89eda679">

4. The UI looks like this
There are 5 values are there inside the data to make a card. 
<img width="1671" alt="UI" src="https://github.com/partho-dev/react/assets/150241170/cb837948-c97f-4ee1-884a-fa2c46950a23">


## Conditional Rendering
- In the data, we get some value and based on that value, we show the UI.
- Ex: We have some items available and so we would need to show on the UI as `available` else `Not Available`

- If we want to change the CSS class also to be changed based on condition, we have to follow this.

To update the color of button, based on condition like, if the item added is true, the button color should be green, else blue

* Without any condition
```
<button className="px-2 py2 bg-blue-400 rounded-md absolute text-white text-sm bottom-0 left-[1/2] -translate-x-[-50%] translate-y-[50%]"> 
        {added?"Added":"Add to Cart"} 
        </button>
```

This is the final output of changing the class as per the condition.
1. `Put the class inside backtick ` **` `**
2. Wrap the class inside `{}`
3. The value needs to be inside es6 `${}`
4. Ensure to keep the value inside "bg-blue-400" `${added? "bg-blue-400":"bg-green-400"}`
Without conditions: `className="px-2 py2 bg-blue-400"`
With Condition : className=` `{px-2 py2 ${added? "bg-blue-400":"bg-green-400"}}` `

* With COndition
```
<button className={`px-2 py2 ${added? "bg-blue-400":"bg-green-400"} rounded-md absolute text-white text-sm bottom-0 left-[1/2] -translate-x-[-50%] translate-y-[50%]`}> 
        {added?"Added":"Add to Cart"} 
        </button>
```

**Data on data section of the component**
`available:true` or `available:false`
```
  let datas = [
    {title: "DevOps is the future", desc:"This automates the SDLC lifecycle", available:true},
    {title: "K8s helps manage the container", desc:"Its an easy technology, that needs a good understanding on the networking", available:false},
    {title: "Linux is the future", desc:"The secure OS", available:true},
    {title: "Go Lang is the future", desc:"Native support for concurrent programming", available:false},
    {title: "JavaScript", desc:"Go to choice for web based application development", available:true}
    ]
```
**Data on the Return section to be shown to the UI**
```
{elem.available ? <button className='px-1 py-1 bg-blue-500 text-white text-xs rounded-lg mt-10'> Available </button> : <button className='px-1 py-1 bg-red-500 text-white text-xs rounded-lg mt-10'> Not Available </button> }
```
<img width="1669" alt="ui" src="https://github.com/partho-dev/react/assets/150241170/ce203088-19b7-4449-a769-cc6c37dcc0a2">


## How to handle Events 
- Like in JS, we handle events like this 
    - document.querySelector(".button").addEventListener("click", ()=>{//do something})
- For React, we cant do that, as there is no DOM, React creates Virtual DOM and so, we have to impliment the Events on the `Button` itself

- `onClick={()=>{}}`
    - There are many events and all accepts a `call back function` and this will get execute everytime we click on the button.

```
<button onClick={()=>{alert("Hello Ji, The product is available")}} 
```
Else, we can declare the function on the data collection place of the components

On the Data collection section 

```
const Cards = () => {

  let onClickHandle = ()=>{alert("Hello Ji, The product is available")}
  return ()}
```

On the Button, just add the function, `Dont` execute that with `()`
```
<button onClick={onClickHandle} Download </button>
```

- There are many events available 
<img width="302" alt="events" src="https://github.com/partho-dev/react/assets/150241170/6aa738ca-bcee-4671-af82-4222a0227890">


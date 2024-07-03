Components 
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

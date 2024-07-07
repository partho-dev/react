- To navigate between different pages or components by clicking on any button, needs routing.
- To impliment the routing on react, need a package `npm install react-router-dom`
- On the main file mostly `Main.jsx`
    - `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'`
    - //Rap the app with BrowserRouter
    ```
        <BrowserRouter>
            <App />  
        </BrowserRouter>
    ```
- To create a Route, the `<Route />` needs to be wrapped inside `<Routes/>`
- Both of them comes from react-router-dom
```
<Routes>
    <Route />
<Routes>
```
- The <Route /> has two props 
    - path= " "
    - element = {}
```
    <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/products' element={<Products/>} />
    </Routes>
```
- Then create the Link which would link the path of <Route> to the specific Component
- This is generally creates in a seperate <Nav> component
```
        <Link to={"/"}> Home </Link>
        <Link to={"/products"}> Products </Link>
        <Link to={"/users"}> Users </Link>
        <Link to={"/about"}> About </Link>
```

Important concepts to memorise
1. Link **to**  `<Link to=" /"> Home </Link>`
2. Route **path** **element** `<Route path='/' element={<Home/>}/>`
3. To enable color change of Menu when its active
    1. instead of using `Link` use `NavLink`
    2. <NavLink style={()=>{}}> </NavLink> // This gives an arrow function
    3. <NavLink style={(e)=>{return {color: e.isActive?"red":""}}}>
    ```
    <nav>
        <NavLink style={(e)=>(
             {color: e.isActive? "red" : ""}
                )} to={"/"}> Home </NavLink> 

        <NavLink style={(e)=>(
            {color: e.isActive?"red":""}
        )} to={"/about"}> About </NavLink> 
        
        <NavLink style={(e)=>(
            {color: e.isActive? "red":""}
        )} to={"/user"}> User </NavLink> 
    </nav>
    ```
4. `useParams()` helps to get the username from URL
5. `useNavigate()` helps to go back by passing that to the button onClick handler
6. To show one route inside another route, the inner route has to be written inside the outer route
7. `<Outlet/>` ensures to show the page as a section on the same page of outer route

### Dynamic Routing
**Situation** : 
1. Click on a user - `John` 
2. the browser url should change to `/user/john`
3. on the page - it should say `Hello John`
4. We cant make individual pages for each user, we will make a common page, and we will render the page for all users with their individual user info

- Create the Link on the content inside user page
<img width="507" alt="users-1" src="https://github.com/partho-dev/react/assets/150241170/02580201-c27a-4bee-ab81-15136b0a8401">

- Create a Dynamic Route for the user 
<img width="521" alt="users-0" src="https://github.com/partho-dev/react/assets/150241170/507b4785-f8a6-4a0e-aa27-75ca522b201e">

- To get the username on the page from the URL, react-router-dom provides `useParams()`
<img width="535" alt="users-2" src="https://github.com/partho-dev/react/assets/150241170/1adc0f73-0aed-47fb-b8ae-aa9039eee585">

- useParams() provides an object which contains the info about the items passes to the url as a parameter
- Go to the Userdetail.jsx page or component and import `useParams()` from `react-router-dom`
<img width="756" alt="user-3" src="https://github.com/partho-dev/react/assets/150241170/db0fc500-d376-4ed7-bed3-587c8571eba4">

The details can be destructured to the object properties as well
- {username} = useParams()

## Go back to previous page by clicking Go button
<img width="647" alt="user-4" src="https://github.com/partho-dev/react/assets/150241170/9dce422f-59de-457a-918d-ca1eb9c8fd07">

- To go one level back `navigate(-1)`

## once we click on any link, it opens it to a different route page, if we want to open the details on the same page upon clicking
1. Need to do some modification on the route

Previously the route for `/user/:username` was taking to `userdetails.jsx` on a different page.
- Here the routes are defined seperately
```
  <Routes>
    <Route path='/user' element={<Users/>}/>
    <Route path='/user/:username' element={<Usersdetail/>} />
</Routes>
```
- To show one route inside another route, this need to be re-arranged
- Remove the self close of `<Route />` of outer route and 
- place the `inner` route inside the `outer` route
- <Route> <Route/> </Route>
```
  <Routes>
    <Route path='/user' element={<Users/>}> 
        <Route path='/user/:username' element={<Usersdetail/>} />
    <Route/>
    
  </Routes>
```
<img width="862" alt="user-5" src="https://github.com/partho-dev/react/assets/150241170/00679535-013d-4c77-a131-1e58235f492d">


- To establish the Connection between the Backend API with the frontend, there is a concept and it is called `AJAX`
- AJAX - Asynchronous Javscript And XML - These days JSON are used 
- To impliment AJAX, we can use the tools like `fetch` or `axios`
- `fetch` is an inbuild solution provided by the JS
- `Axios` is a 3rd party package that we need to install to use that
- By clicking button, we are able to get the data through API
<img width="1106" alt="API-0" src="https://github.com/partho-dev/react/assets/150241170/64a0fdda-7420-42b9-a3d4-9dd6783309be">

- Just displaying the products, but, by clicking a button
<img width="1340" alt="API-1" src="https://github.com/partho-dev/react/assets/150241170/948bef16-c363-4b95-bcb0-10b6b75af07e">

- Since, an API is an asynchronous process and so it needs to be inside an async function and to access that, we need to click on a button.

- But, this is not ideal, we would need a solution to call the API and display the data upon page renders.

## useEffect()
- To solve that issue of not loading API upon page loads, React gave another hook called `useEffect()`
- To understand, how useEffect() can solve this issue for us, 
- and it happens because of `React lifecycle method`.
    - 3 types of lifecycles are there, which controls the `Component`
        * `Component Mount` // Creation
        * `Component update` // Updation
        * `Component Unmount` // Deletion
- When we are on `Home` page, the - `Home.jsx` component is `Mounted` or created
    - But, the other two pages like `About` & `Products` these two components are not mounted yet or are not created yet on the browser.
    - On the `Home` when we click the button to get the data from API, that means we are `Updating` the component
    - `Update lifecycle` means - If there is any change happens on state and that reflects the UI
    - The moment, we swtich to `About` Nav menu, `2` thing happens
        1. First it `unmount` the `Home.jsx` component &
        2. Second it `mounts` the `About.jsx` component
- These lifecycle methods of React is being used by `useEffect() hook`
- useEffect impliments the React lifecycle method

## useEffect() syntax
- useEffect(callbackFunction, [])
    - `callback function` -
    - `[]` : Dependancy Array
```
const Product = () => {
    useEffect(()=>{
        // What ever is kept here, gets loaded automatically everytime the component loads
        console.log("Mounting Product Page")
        
        // This section returns another CB which executes when the component is unmounts
        return ()=>{
            console.log("Unmounting Product Page")
        }
    })
  return (
    <div>
      product
    </div>
  )
}

```
<img width="941" alt="API-2" src="https://github.com/partho-dev/react/assets/150241170/8d2efe03-753c-4ccb-86c6-00b4634a62b1">

## Component Rendering( *Refreshing the entire component* ) and Component Updating( *Not refreshing the entire component/page*)
1. `Rendering` - Means the component gets `Deleted(Unmount)` first and then `Mounts` back
    - useEffect(()=>{})
    - only `1` parameter for useEffect() hook
    - Only the `Callback function` 
2. `Updating` - Means, only update the `State` which is changed without `unmounting` & `Remounting` the component
    - useEffect(()=>{}, [])
    - It has `2` params
    - 1st - the callback & 2nd - Empty Dependancy array
3. If we want to render the entire component based on any particular state change, we just need to write the state name inside that `dependancy` array.

## Explanation with a code
* On the below code, the component will `not be rendered` for any change in any state, unless there is any change on `item` useState()
* if there is no `[]` - The entire component would be `refreshed everytime`, due to any change in any state/
* There would `never be any refreshment or rendering` of the Product.jsx component for any change on any component if we just update an `empty []`

```
import React, { useEffect, useState } from 'react'

const Product = () => {
    const[item, setItem]=useState("1st Item")
    const [image, setImage] = useState("Good image")
    useEffect(()=>{
        console.log("Mounting Product Page")

        return ()=>{
            console.log("Unmounting Product Page")
        }
    }, [item])
  return (
    <div className='flex flex-col gap-4 p-3'>
        <div className='bg-yellow-200 w-fit flex flex-col'>
        <button onClick={()=>{setItem("Item is changed because of button clicked")}} className='px-2 py-2 bg-blue-300 rounded-md'> Product Change </button>
        {item}
        </div>

        <div className='bg-yellow-200 w-fit flex flex-col'>
            <button onClick={()=>{setImage("Image is changed because of button clicked")}} className='px-2 py-2 bg-blue-300 rounded-md'> Image Change</button>
            {image}
        </div>
   

    </div>
  )
}

export default Product
```

- This is the same component of `Component mount` would be useful for us to call and get the data from API everytime that page/component loads.
- User goes to `Home`  page and the Data shows on UI.
- So, we will call the API inside the useWEffect on the Home page and see.
<img width="1094" alt="API-3" src="https://github.com/partho-dev/react/assets/150241170/998b5bfc-32fb-4927-af47-6da624b86b91">


## Why do we need to have a centralised **AXIOS** in the application
- When we work with REST API, we need to call the API to get the Data
- We can call the API by importing AXIOS on each component seperately
- But, this has some drawbacks like unable to maintain the session from the entire application level.
- Login would happen through different session and while trying to access the restricted products through dofferent Axios, the user would not be able to authenticated as its a different axios object 
- To maintain the sessions, its best practised to have a centralised Axios imported and then we can use the instance of that Axios on all the components.

- More Detailed info
1. Consistent Configuration:
    - **Base URL**: Setting a base URL for all requests to the same endpoint, which maintains the consistant `baseurl`.
    - **Headers**: Common headers like Authorization tokens or Content-Type can be set once and reused, ensuring consistency across all API calls.

2. Session Management:
    - **Authentication**: A centralized Axios instance can store authentication tokens (e.g., JWTs) and send them with each request. This ensures that user sessions are maintained across different components.
    - **Session Persistence**: By using a single Axios instance, cookies or other session data can be consistently managed, avoiding issues where different Axios instances might not share the same session state.

3. Interceptors:
    - **Request Interceptors**: Centralized interceptors can handle tasks like attaching tokens to requests or logging request details uniformly across the application.
    - **Response Interceptors**: They can be used to handle common response scenarios, such as redirecting to a login page on a 401 Unauthorized error or transforming response data before it reaches components.

4. Error Handling:
    - Centralized error handling ensures that common errors (e.g., network issues, 500 Internal Server Errors) are processed uniformly, providing a better user experience and reducing redundancy in error-handling code.

5. Performance Optimization:
    - Single Point of Configuration: With a centralized Axios instance, performance-related settings (like timeout values, retries, etc.) can be managed from one place, making it easier to tune performance across the application.

6. Code Maintainability:
    - DRY Principle: Centralizing Axios helps adhere to the "Don't Repeat Yourself" principle by reducing the need to configure Axios in multiple places, leading to cleaner, more maintainable code.

## Setting the centralised AXIOS
1. import `Axios`
2. create an instance - `const api = axios.create({baseURL:"https://fakestoreapi.com"})`
3. create request intercept - see the doc `https://axios-http.com/docs/interceptors`

```
// api.js
import axios from 'axios';

// Create an instance of Axios
const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      // Handle 401 errors (e.g., redirect to login)
    }
    return Promise.reject(error);
  }
);

export default api;
```

## Uisng the instance of axios on the components
```
// SomeComponent.js
import React, { useEffect, useState } from 'react';
import api from './api';

const SomeComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get('/some-endpoint')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('API call failed:', error);
      });
  }, []);

  return (
    <div>
      {/* Render data */}
    </div>
  );
};

export default SomeComponent;
```
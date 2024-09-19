
## Redux flow

- ![React-Redux](https://github.com/user-attachments/assets/64dbfa11-0307-44d5-bbd3-5150f9942ba7)



- Component(User component , product Component) gets the data from Store using the `useSelector()` hook

- React Redux is a state management library specifically designed for React applications.

- It addresses the challenges of managing global state in complex React applications, particularly when dealing with:

  - Data Flow: Managing data flow between components can become complex as applications grow. Redux provides a centralized store for application state, making it easier to manage and reason about data flow.
  - State Updates: Updating state in multiple components can lead to inconsistencies and potential bugs. Redux ensures that state updates are predictable and consistent across the entire application.
  - Debugging: Debugging state-related issues can be difficult in large React applications. Redux provides tools and techniques to help identify and fix state-related problems.

### Why Redux over Context?

- While Context can be used for state management in React, it has some limitations:

  - Global Scope: Context provides a global scope for state, which can make it difficult to manage state in large applications.
  - Performance: Context can impact performance, especially when used for frequent state updates.
  - Complexity: Context can become complex to manage as the application grows, making it harder to understand and maintain.

### Redux addresses these limitations by:

  - Centralized Store: Redux provides a single source of truth for application state, making it easier to manage and reason about data flow.
  - Immutable State: Redux encourages the use of immutable state, which can improve performance and make it easier to debug state-related issues.
  - Predictable State Changes: Redux uses a unidirectional data flow, making it easier to understand how state changes occur and to debug issues.
  - Developer Tools: Redux provides developer tools that can help you visualize state changes, debug issues, and time-travel through your application's history.

- In summary, React Redux is a powerful tool for managing state in React applications. It offers a structured approach to state management, making it easier to build scalable and maintainable applications. While Context can be used for simpler state management scenarios, Redux is often preferred for larger and more complex applications.

### Build a Redux

- STart like this
1. Create a slice first and make reducers
- use this `createSlice` - `import { createSlice } from "@reduxjs/toolkit";`

2. Create a Store by importing the reducers(slice) from above
- Need this `configureStore()` - `import { configureStore } from '@reduxjs/toolkit'`
- `const store = configureStore()` -- This makes the store, but there is no data which we will pass through small small reducers

3. Now, connect this reducer with store -
    - Go to store
    - `import UserReducer from "./reducers/UserReducer"`
    - keep the reduxers as an object inside 
        - `configureStore( { reducer : {UserReducer}} )`

4. Store should have the data from the reducers
- import the data from the respective slice (slice.reducer)
- on the `userSlice.jsx` 
- create slice  = {}
- export reducer (Give it to store)
- export actions (Give it to the component)

4. Now, go to any components (Users.jsx)
- show the User data by collecting it from the store
- to get the data on the components, use `useSelector()`
- useSelector((state)=>state.userReducer)

5. The slice also responsible to provide the functions which are used to manupulate the data on any component
- Example - On the UI(User component), we want to delete the user by clicking on Delete button
- This can not be done if the slice does not provide & export any delete() & the user component should import that function
- this function always has two arguments, (state, action)
- `state` is nothong but the `initialData` that it receives
- But `action` is an `object {type: ..., payload:...}` with key = type & value = "nameofReducer/functionName"
- `{ type: "users/deleteUser", payload: 0 }`
- Here, payload is the argument that we pass to the reducer action on Component during dispating the action

6. On the slice.js file
- We will write the logic of the action, like `deleteUser()`, `addUser()`
- so, the state = the initial state (state.users)
```
  reducers : {
    //actions
    deleteUser : (state, action)=>{
      console.log(state)
      state.users.splice(action.payload, 1) 
      /* here action.payload is the index value of the user, ex: 0th position, so splice(0,1) = remove 1 value from 0th position */
    }  
  }
```
- The action `deleteUser()` gets two arguments `state` & `action`
- state is the initial state mentioned on the slice file
- `action` : `{ type: "users/deleteUser", payload: 0 }`
- so, If I want the value of `payload`, I have to do `action.payload`
- action.type = "users/deleteUser" # This is just for the system, we dont do much with that.
- We just need the action.payload value 


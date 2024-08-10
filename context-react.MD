- passing data through props from parent to grand child is always an issue as the prop has to passthrough the child component.
- This is not an efficient method
- To solve this, if we can find a mechanism to store that data centralised and that can be used by any component
- That problem is being solved by `React context API`

## Procedure
1. Create a component called `Context.jsx` which returns the props.children
2. To get those children as all the components we have to wrap that Context in the main.jsx

## Lets see that as an action 🌿
1. create conponent - context.jsx
<img width="842" alt="Context-0" src="https://github.com/partho-dev/react/assets/150241170/750980a3-2926-46d4-9af8-487f8a854431">

2. Now, if we want that data to be into `User.jsx` component & `Userdetails.jsx` we can use like this.
- For `User.jsx` component
<img width="930" alt="Context-1" src="https://github.com/partho-dev/react/assets/150241170/f97b1c73-0717-4a4c-976f-dc997a17b41b">

- on the UI
<img width="1066" alt="Context-UI-User" src="https://github.com/partho-dev/react/assets/150241170/2bd2723c-789f-40a5-a33c-b236af7f1aad">


- Foe `Userdetails.jsx`
<img width="873" alt="Context-2" src="https://github.com/partho-dev/react/assets/150241170/7ca94b7c-0e65-414f-8e79-068f5a7af85a">

- On the UI
<img width="1022" alt="Context-UI-Userdetails" src="https://github.com/partho-dev/react/assets/150241170/b002173e-541b-44c7-809c-612f1ac6b318">

In the above, we have not passed the props from App to User to Userdetail component.
But, we just imported the centralised data and used that based on what to be shown on the UI

// To create a single element 
const headingReact = React.createElement("h1", {}, "Hello, I am coming from React!")
const rootReact = ReactDOM.createRoot(document.querySelector(".rootReactJS"))
rootReact.render(headingReact)


// Create multiple elements or element inside an element 

// Something like the below
/* <div class="parent">
        <div class="child">
            <h1> One </h1>
            <h2> Two</h2>
        </div>        
</div> */

var parent = React.createElement("div", {class:"parent"}, [
    React.createElement("div", {class:"child"}, [
        React.createElement("h1", {}, "One"),
        React.createElement("h2", {}, "Two")
    ])
])

var root = ReactDOM.createRoot(document.querySelector(".root"))
root.render(parent)
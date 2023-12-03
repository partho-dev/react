1. we can use the HTML to show something on the browser.
2. But, using JS also we can show something on the browser. inside script tag.
    1. If there is any element already present on the HTML like h4, h5, p
    2. We can just call them into the JS using document.queryselector and add some text using .innerHTML 
    3. Then we need to call the div with their ID or Class using document.queryselector 
    4. Then we need to append the element to that Div.

3. But, using React how can we show some test in the browser
    1. For that, need to make the file React enabled,
    2. One way to enable react is by the react CDN.
    3. We need to paste the CDN links just above the body tag </body>

const headingReact = React.createElement("h1", {}, "Hello, I am coming from React!")
const rootReact = ReactDOM.createRoot(document.querySelector(".rootReactJS"))
rootReact.render(headingReact)

4. Similarly if we want to create nested element something like this
<!-- /* <div class="parent">
        <div class="child">
            <h1> One </h1>
            <h2> Two</h2>
        </div>        
</div> */ -->
We have to nest the elements like this and to show the child elements, we have to use array []
var parent = React.createElement("div", {class:"parent"}, [
    React.createElement("div", {class:"child"}, [
        React.createElement("h1", {}, "One"),
        React.createElement("h2", {}, "Two")
    ])
])

var root = ReactDOM.createRoot(document.querySelector(".root"))
root.render(parent)


6. As we can see from the above, its very complex to maintain and create the code, so to rescue from this, 
we got to use JSX


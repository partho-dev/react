import ButtonComponent from "./ButtonComponent";
import HelloComponent from "./HelloComponent";

function App(){
  return ( <div>
      <h4> Hello world</h4> 
      {/* write a button directly  */}
      <button> Like me</button>  <br />

      {/* import another button component  */}
      <ButtonComponent/>

      <HelloComponent/>
  </div> 
  )

}

export default App;
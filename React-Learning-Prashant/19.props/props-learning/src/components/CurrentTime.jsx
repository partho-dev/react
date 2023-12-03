const CurrentTime = () =>{
  let time = new Date()
  return ( <h4> current time is {time.toLocaleTimeString()} </h4>)
}

export default CurrentTime;
function TimeComponent(){

  let current_time = new Date();

  return(
    <div>
      <h4> This is the Current Time: {current_time.toLocaleDateString()} - {current_time.toLocaleTimeString()}</h4>
    </div>
  )
}

export default TimeComponent;
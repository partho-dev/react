const Student = (props) =>{

  let {name, age} = props

  return(
    <>
      <div className="student">
      <p > Student name is {name} </p>
      <p> Student Age is {age} </p>
      </div>
    </>
  )

}

export default Student;

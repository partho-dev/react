const HealthyFood = (props) =>{
  let {name, cost} = props
  let foodItems = ["Roti", "Rice", "Dal", "Chicken", "Biriani"]
  
  return (
    <>
    {foodItems.map((item)=>{return <li className="list-group-item" key={item} > Healthy Foods : {item} name = {name} & cost = {cost} </li> })}
    </>
  )
}

export default HealthyFood;
const NoFood = ({item}) =>{
  return((item.length === 0) ? <h4> I am hungry</h4> : null ) //2nd Ternary operator)
}

export default NoFood;
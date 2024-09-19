import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProduct } from '../store/reducers/productReducer'

const Products = () => {
    const productDispatch = useDispatch()

    const addHandler = (item)=>{
            console.log(item)
            productDispatch(createProduct(item))
    }

    const {products} = useSelector((state)=>state.productReducer)
    console.log(products)
  return (
    <div>
      <h1> List of Products</h1>
      {products.map((elem)=>(
        <>
       
        <div key={elem.id}> {elem.name} </div>
        
        </>
      ))}
      <hr />
      <button onClick={()=>addHandler("Partho")} > Add </button>
    </div>
  )
}

export default Products

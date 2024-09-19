// import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../store/reducers/UserReducer'

const  User = () => {
  const {users} = useSelector((state) => state.UserReducer)
  const userDispatch = useDispatch()
  const handleDelete = (index) =>{
     console.log(index)
     userDispatch(deleteUser(index))
    //  users.filter((index)=>index !==indexed)
  }
  
  // console.log(users)

  return (
    <>
      <h1 className='w-full bg-slate-500 '>  User List </h1>
      {users.map((elem, index)=> (
      <p key={elem.id}> {elem.name} <span onClick={()=>handleDelete(index)} className='cursor-pointer mx-5'> 🗑️ </span> </p>
      ) )}
      
    </>
  )
}

export default User

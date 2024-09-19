import React from 'react'
import { Link, Route, Routes } from "react-router-dom";

import Products from './Components/Products';
import User from './Components/Users';

const App = () => {
  return (
    <div className='w-full h-full'>
      <nav className='y-5  w-full flex justify-center gap-10 bg-red-500'>
        <Link to="/user" > User </Link>
        <Link to="/product" > Product </Link>
      </nav>

      <Routes> 
        <Route path='/user' element= {<User/>} ></Route>
        <Route path='/product' element= {<Products/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
  
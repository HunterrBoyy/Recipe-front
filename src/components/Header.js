import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { Button } from "@material-tailwind/react";
import { useSelector } from 'react-redux';



const Header = () => {

const nav = useNavigate()  


const {user} = useSelector((store)=> store.user)

// const logout = () => {
// localStorage.removeItem("userSession")
// nav('user/login.js')

// }
  return (
    <div className='bg-black text-white flex justify-between items-center px-4 py-3 sticky top-0 z-10'>
      
        <h1 className='text-2xl' onClick={() => nav('/')}>Recipe</h1>
          
        {!user && <Button  color="green"  onClick={() => nav('/user/login')}>Log Out</Button> }
     

    </div>
  )
}

export default Header



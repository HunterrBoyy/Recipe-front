import React from 'react'
import {  useNavigate } from 'react-router-dom'
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { removeUserSession } from '../features/userSlice';



const Header = () => {

const nav = useNavigate()  
const dispatch = useDispatch()

const {user} = useSelector((store)=> store.user)


  return (
    <div className='bg-black text-white flex justify-between items-center px-4 py-3 sticky top-0 z-10'>
      
        {user && <h1 className='text-2xl' onClick={() => nav('/')}>Recipe</h1>}
          
        {user && <Button  color="green"  onClick={()=>{
          dispatch(removeUserSession());
          nav('/user/login')
        }}>Log Out</Button> }
     

    </div>
  )
}

export default Header



import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const UserRoute = () => {
 const {user} = useSelector((store) => store.user);
 return user === null ? <Outlet /> : <Navigate to = "/" replace= {true} />
}

export default UserRoute

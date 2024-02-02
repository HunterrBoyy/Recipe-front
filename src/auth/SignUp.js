import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import {  useFormik } from 'formik';
import * as Yup from 'yup';
import { useUserRegisterMutation } from '../features/authApi';
import { toast } from 'react-toastify';

const SignUp = () => {
  
  const [userSignUp, {isloading}] = useUserRegisterMutation()
  const nav = useNavigate()
  
  const registerSchema = Yup.object({
    fullname : Yup.string().required('Required'),
      email :Yup.string().email('Invalid Email').required('Required'),
      password :Yup.string().min(5).max(20).required('Required')
  })

  const formik = useFormik({
    initialValues:{
      fullname : '',
      email :'',
      password :''
    },
    
    onSubmit:async (val)=>{
      try {
        const response = await userSignUp(val).unwrap();
        toast.success(`${response}`);
        nav(-1);
      } catch (err) {
        toast.error(`${err?.data}`)
      }
    },
    validationSchema :registerSchema
  })
  
  return (
    
    <div className='flex justify-center'>
    <Card color="transparent" shadow={false} >
     <Typography variant="h4" color="blue-gray">
       Sign Up
     </Typography>
     <Typography color="gray" className="mt-1 font-normal">
       Enter your details to register.
     </Typography>
     <form onSubmit={formik.handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
       <div className="mb-1 flex flex-col gap-6">
         <Typography variant="h6" color="blue-gray" className="-mb-3">
           Your Name
         </Typography>
         <Input
           size="lg"
           name='fullname'
           id='fullname'
           onChange={formik.handleChange}
           value={formik.values.fullname}
           placeholder="name@mail.com"
           className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
           labelProps={{
             className: "before:content-none after:content-none",
           }}
         />
         
          {formik.errors.fullname && formik.touched.fullname && <h1 className='text-red-900'>{formik.errors.fullname}</h1>}
         <Typography variant="h6" color="blue-gray" className="-mb-3">
           Your Email
         </Typography>
         <Input
           size="lg"
           name='email'
           id='email'
           onChange={formik.handleChange}
           value={formik.values.email}
           placeholder="name@mail.com"
           className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
           labelProps={{
             className: "before:content-none after:content-none",
           }}
         />
         {formik.errors.email && formik.touched.email && <h1 className='text-red-900'>{formik.errors.email}</h1>}
         <Typography variant="h6" color="blue-gray" className="-mb-3">
           Password
         </Typography>
         <Input
           type="password"
           name='password'
           id='password'
           onChange={formik.handleChange}
           value={formik.values.password}
           size="lg"
           placeholder="********"
           className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
           labelProps={{
             className: "before:content-none after:content-none",
           }}
           />
           {formik.errors.password && formik.touched.password && <h1 className='text-red-900'>{formik.errors.password}</h1>}
       </div>
       <Button type='submit' className="mt-6" fullWidth >
         sign up
       </Button>
       <Typography color="gray" className="mt-4 text-center font-normal">
         Already have an account?{" "}
         <Typography onClick={() => nav(-1)} className="font-medium text-gray-900 cursor-pointer">
           Sign In
         </Typography>
       </Typography>
     </form>
   </Card>
   </div>
 );
}

export default SignUp

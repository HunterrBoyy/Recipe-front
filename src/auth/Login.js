import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux';
import { useUserLoginMutation } from '../features/authApi';
import {  toast } from 'react-toastify';
import { userAdd } from '../features/userSlice';


const Login = () => {
  const dispatch = useDispatch();
  const nav= useNavigate();
  const data = useUserLoginMutation()
console.log(data)
  const [loginUser , {isLoading}] = useUserLoginMutation()

  const loginSchema = Yup.object().shape({
    email:Yup.string().email('Invalid Email').required('Required'),
    password:Yup.string().min(5).max(20).required('Required')
  })
  
  const formik = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit: async (val) => {
     try {
      const response = await loginUser(val).unwrap();
      dispatch(userAdd(response));
      toast.success(`${response?.message}`)
      nav(-1)
     } catch (err) {
      toast.error(`${err?.data}`)
     }

    },
    validationSchema:loginSchema
  })
  return (
    <div className='flex justify-center'>
    <Card className="w-96">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign In
        </Typography>
      </CardHeader>
      <form onSubmit={formik.handleSubmit}>
      <CardBody className="flex flex-col gap-4">
        <Input 
        name='email'
        onChange={formik.handleChange}
        value={formik.values.email}
        label="Email" size="lg" />
        {formik.errors.email && formik.touched.email && <h1 className='text-red-900'>{formik.errors.email}</h1>}
        <Input
        name='password'
        onChange={formik.handleChange}
        value={formik.values.password}
        type='password'
         label="Password" size="lg" />
         {formik.errors.password && formik.touched.password && <h1 className='text-red-900'>{formik.errors.password}</h1>}
        
      </CardBody>
      
      <CardFooter className="pt-0">
        {isLoading ? <Button type='submit' className="mt-6" fullWidth>
          <div className='h-7 w-7 border-2 border-t-blue-gray-900 rounded-full animate-spin mx-auto '></div>
            </Button> : <Button type='submit' variant="gradient" fullWidth >
                Sign In
            </Button>}
        <Typography variant="small" className="mt-6 flex justify-center">
          Don&apos;t have an account?
          <Typography
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold cursor-pointer"
            onClick={() => nav('/user/SignUp')}
          >
            Sign up
          </Typography>
        </Typography>
      </CardFooter>
      </form>
    </Card>
    </div>
  );
}

export default Login

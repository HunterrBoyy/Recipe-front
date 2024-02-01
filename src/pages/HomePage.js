import React from 'react'
import { recipe } from '../dummy/recipe'
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from 'react-router-dom';



const HomePage = () => {
const nav = useNavigate()
  return (
    <>
    <div className='grid grid-cols-3 gap-2'>
        {recipe.map((r)=>{
        return <div onClick={() => nav(`/recipeDetail/${r.id}`)} key={r.id} className='space-y-2 cursor-pointer'>
        <Card className="w-96" >
      <CardHeader floated={false} className="h-80">
        <img src= {r['img-url']}  />
      </CardHeader> 
      <CardBody className="text-center">
        <Typography variant="h4" color="blue-gray" className="mb-2">
          {r.dish}
        </Typography>
       
      </CardBody>
     
    </Card>
    </div>
})}
     </div>
    </>
  )
}

export default HomePage

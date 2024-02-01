import React from 'react'
import { useParams } from 'react-router-dom';
import { recipe } from '../dummy/recipe';

const DetailPage = () => {
  const {id} = useParams();

  const clickedRecipe = recipe.find((r)=> r.id === id)
  console.log(clickedRecipe, typeof clickedRecipe)
  return (
    <>
      {clickedRecipe.dish}
      <div><img src= {clickedRecipe['img-url'] } width={500}  /></div>
      <table>
      <tbody>
      <tr>
        <td>Food Type</td>
        <td>:</td>
        <td>{clickedRecipe.foodType}</td>
      </tr>
      <tr>
        <td>Origin Country</td>
        <td>:</td>
        <td>{clickedRecipe.country}</td>
      </tr>
      <tr>
        <td>Description </td>
        <td>:</td>
        <td>{clickedRecipe.description}</td>
      </tr>
      <tr>
        <td>Process of Making </td>
        <td>:</td>
        <td>{clickedRecipe.process}</td>
      </tr>
      </tbody>
      </table>
    </>
  )

}

export default DetailPage

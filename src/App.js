import React from 'react'
import './App.css';
import {MDBInput, MDBBtn, MDBRow, MDBContainer, MDBCol } from 'mdbreact'
import Axios from 'axios'
import Recipes from './components/recipes'

const api = {
  key: 'abb039e8747846d80992c6ad47412b04',
  id: 'f6ff5ce0'
}
const getExample = 'https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}'

function App() {
  const [search, setSearch] = React.useState('')
  const [recipes, setRecipes] = React.useState([]) ; // I am gettin an array from the API
  const [query, setQuery] = React.useState('')

  // Runs only after the submit button as been clicked
  React.useEffect(() => {
    getRecipe() ;
  }, [query])
 
  const setValue = (e) => {
    setSearch(() => e.target.value)
  }
  
  // gets the value of search
  const changeQuery = (e) => { 
    e.preventDefault()
    setQuery(search)
  }

  const getRecipe = async (e) => {
    const url = `https://api.edamam.com/search?q=${search}&app_id=${api.id}&app_key=${api.key}`
    const response = await Axios.get(url)

    const { data } = await response;

    console.log(recipes)
    setRecipes(data.hits)
  }

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol className = 'd-flex justify-content-center'>
          <form onSubmit = {changeQuery} style = {{width: '100%', textAlign: 'center'}}>
            <input type="text"
              value = {search}
              onChange = {setValue} 
              style = {{width: '70%'}}
            />     
            <MDBBtn type = 'submit'>SEARCH</MDBBtn>
          </form>
        </MDBCol>
      </MDBRow>
          
      <MDBRow className = 'my-5'> 
        <MDBCol style = {{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          {recipes.map((recipe, i) => (
            <div className = 'py-2'>
              <Recipes
                key = {recipe.i} 
                image = {recipe.recipe.image}
                title = {recipe.recipe.label}
                calories = {recipe.recipe.calories}
              />
            </div>   
          ))}
        </MDBCol>    
      </MDBRow>
    </MDBContainer>
  );
}

export default App;

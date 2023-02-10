
import './App.css';
import { useCallback, useEffect, useState } from 'react';

import MyRecipeComponent from './MyRecipeComponent';
import ButtonsPlates from './ButtonsPlates';

function App() {
const MY_ID = "3ab00706";
const MY_KEY = "a8cd9ad5e51c62745b22673017ca796d";	

const [mySearch, setMySearch] = useState ('');
const [myRecipes, setMyRecipes] = useState ([]);
const [wordSubmitted, setWordSubmitted] = useState (['avocado']);



const getQuotes = useCallback (async () => {
const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await responce.json();
setMyRecipes(data.hits);
},[wordSubmitted])

useEffect (() => {
getQuotes()
},[getQuotes])

const myRecipeSearch = (e) => {
setMySearch (e.target.value)
}

// что-бы не перегружалась страница

const finalSearch = (e) => {
e.preventDefault();
setWordSubmitted(mySearch);
}


return (
  <div  className="App">
    

    <div  className="container">
      <p className='head'>Find a Recipe</p>
    </div>
  
    <div className="container-search">
      <div className='form'>
        <form onSubmit={finalSearch}>
          <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}/>
          <button><img className='icons' src="https://cdn-icons-png.flaticon.com/512/4478/4478006.png" alt='searcher' /></button>
        </form>
      </div>
    </div>
    
    <div className='container'>
      <ButtonsPlates filterPlate={setWordSubmitted}/>  
    </div>

    <div className='container'>
      {myRecipes.map(element => (
      <MyRecipeComponent label={element.recipe.label} image={element.recipe.image} calories={element.recipe.calories} ingredients={element.recipe.ingredientLines}/>
     ))}
    </div>
       
  </div>    
  );
}

export default App;


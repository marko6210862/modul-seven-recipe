
import './App.css';
import { useEffect, useState } from 'react';
import MyRecipeComponent from './MyRecipeComponent';



function App() {
const MY_ID = "3ab00706";
const MY_KEY = "a8cd9ad5e51c62745b22673017ca796d";	

const [mySearch, setMySearch] = useState ('');
const [myRecipes, setMyRecipes] = useState ([]);
const [wordSubmitted, setWordSubmitted] = useState (['avocado']);
const Shrimp = ()=>{
setWordSubmitted ('shrimp');
}
const Fish = ()=>{
setWordSubmitted ('fish');
}
const Chicken = ()=>{
setWordSubmitted ('chicken');
}
const Salmon = ()=>{
setWordSubmitted ('salmon');
}
const Potato = ()=>{
setWordSubmitted ('potato');
}
const Vegan = ()=>{
setWordSubmitted ('vegetables');
}
const Soup = ()=>{
setWordSubmitted ('soup');
}
const Pasta = ()=>{
setWordSubmitted ('pasta')
}
const Dessert = ()=>{
setWordSubmitted ('dessert')
}

useEffect (() => {
const getQuotes = async () => {
const responce = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
const data = await responce.json();
setMyRecipes(data.hits);
}
getQuotes()

},[wordSubmitted])

const myRecipeSearch = (e) => {
setMySearch (e.target.value)
}

// что-бы не перегружалась страница

const finalSearch = (e) => {
e.preventDefault();
setWordSubmitted(mySearch);
}


return (
  <div className="App">

    <div className="container">
      <p className='head'>Find a Recipe</p>
    </div>

    <div className="container-search">
      <form onSubmit={finalSearch}>
        <input className="search" placeholder="Search..." onChange={myRecipeSearch} value={mySearch}></input>
      </form>
      <button>
        <img src="https://cdn-icons-png.flaticon.com/512/4478/4478006.png" width="30px" alt='searcher' className='icons'/>
      </button>
    </div>

    <div className="container">  
      <button onClick={Shrimp}><img className='logo' src='https://assets.bonappetit.com/photos/610c5f4e53498539aff611e2/1:1/w_1124,h_1124,c_limit/0921-Pantry-Seared%20Shrimp%20With%20Kare-Kare%20Butter.jpg' alt='shrimp'/>
      <p className="dish">Srimp</p></button>
      <button onClick={Fish}><img className='logo' src='https://poshjournal.com/wp-content/uploads/2021/01/air-fryer-tilapia-2-500x500.jpg' alt='fich'/>
      <p className="dish">Fish</p></button>
      <button onClick={Chicken}><img className='logo' src='https://i.pinimg.com/originals/08/1f/06/081f06aa1e3b1595e4e6c4d16de14f7a.png' alt='cicken'/>
      <p className="dish">Chicken</p></button>
      <button onClick={Salmon}><img className='logo' src='https://avatars.mds.yandex.net/i?id=d04370b942b3f74f6365099dac4c442a_l-5221283-images-thumbs&n=13' alt='salmon'/>
      <p className="dish">Salmon</p></button>
      <button onClick={Potato}><img className='logo' src='https://sun9-47.userapi.com/iha5iHNaByXi_T2BMbIpGuiS-DWf7jvahB_ccQ/hfYLtRfK4Rg.jpg' alt='potato'/>
      <p className="dish">Potato</p></button>
      <button onClick={Vegan}><img className='logo' src='https://www.healthygffamily.com/wp-content/uploads/2017/03/IMG_9818-720x720.jpg' alt='vegetables'/>
      <p className="dish">Vegetables</p></button>
      <button onClick={Soup}><img className='logo' src='https://i.pinimg.com/originals/b5/3c/cc/b53ccc620329e5a639fc8e47fd39224e.jpg' alt='soup'/>
      <p className="dish">Soup</p></button>
      <button onClick={Pasta}><img className='logo' src='https://cdn.bellinigroup.ru/upload/201711/5a1e846d7f866_1080x1080_fit.png' alt='pasta'/>
      <p className="dish">Pasta</p></button>
      <button onClick={Dessert}><img className='logo' src='https://mykaleidoscope.ru/uploads/posts/2021-09/1632403697_12-mykaleidoscope-ru-p-tort-assorti-krasivo-foto-22.jpg' alt='dessert'/>
      <p className="dish">Dessert</p></button>
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


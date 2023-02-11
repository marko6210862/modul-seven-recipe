function MyRecipeComponent ({label, image, calories, ingredients}) {
    return (
<div className='box'>
    <div className="card">
        <div className="container">
            <p className="header">{label}</p>
        </div> 
      
        <div className="container-image"> 
            <img className="tasty" src={image} alt='foto'/>
                <div className="par">
                    <p className="cal">{calories.toFixed()}</p>
                    <p className="Cal">Cal</p>
                </div>
        </div>
        
        <ul className="list">
            {ingredients.map(ingredient => (
            <li key={ingredients}>{ingredient}</li>
            ))}
        </ul>
    </div>
</div>
)
}

export default MyRecipeComponent;

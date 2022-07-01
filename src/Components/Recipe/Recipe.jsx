export const Recipe = ({recipe}) => {

    return (
        <div className="recipes__card">
            <h2 className="recipes__title">{recipe.name}</h2>
            <p className="recipes__method">{'Method - ' + recipe.method}</p>
            <ul className="recipes__list list">
                {recipe.ingredients.map((ingredient) => {
                    return <li  key={ingredient.name} className="list__item">{ingredient.name}<span> - {ingredient.amount}</span></li>
                })}
            </ul>
        </div>
    );
}

  

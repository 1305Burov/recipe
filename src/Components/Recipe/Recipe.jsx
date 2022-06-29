export const Recipe = ({recipe}) => {

    return (
        <div>
            <h2>{recipe.name}</h2>
            <ul>
                {recipe.ingredients.map((ingredient) => {
                    return <li key={ingredient.name}>{ingredient.name}<span> - {ingredient.amount}</span></li>
                })}
            </ul>
        </div>
    );
}

  

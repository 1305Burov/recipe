import { Link } from 'react-router-dom';


export const Recipe = ({recipe}) => {
    return (
        <div className="recipes__card">
            <h2 className="recipes__title"><Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link></h2>
        </div>
    );
}

  

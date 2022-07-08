import { Link } from 'react-router-dom';

export const Recipe = ({recipe}) => {
    return (
        <div className="recipes__card">
            <Link to={`/recipe/${recipe.id}`} className="recipes__link">{recipe.name}</Link>
        </div>
    );
}

  

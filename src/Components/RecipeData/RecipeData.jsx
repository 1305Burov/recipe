import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteRecipe, getRecipe } from '../../api/recipes';
import { useParams, useNavigate } from 'react-router-dom';
import { removeRecipeAction } from '../../store/recipes/actionCreators';
import { removeRecipeThunk } from '../../store/recipes/thunk';


export default function RecipeData() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
    if (recipeId) {
        getRecipe(recipeId)
            .then((recipe) => setRecipe(recipe))
            .catch((err) => {
                setRecipe(null);
                console.error(err);
            });
    }
    }, [recipeId]);
    
    const removeRecipe = () => {
        dispatch(removeRecipeThunk(navigate, Number(recipe.id)));
    }

    if (!recipe) {
        return <h1>Not found!</h1>;
    }
    if (!recipe.id) {
        return <h1>Loading...</h1>;
    }

    return (
    <div>
        <h2 className="recipes__title">{recipe.name}</h2>
        <p className="recipes__method">{'Method - ' + recipe.method}</p>
        <ul className="recipes__list list">
            {recipe.ingredients.map((ingredient) => {
                return <li  key={ingredient.name} className="list__item">{ingredient.name}<span> - {ingredient.amount}</span></li>
            })}
        </ul>
        <button className="button recipes__delete"  onClick={removeRecipe}>Delete</button>
    </div>
    );
}

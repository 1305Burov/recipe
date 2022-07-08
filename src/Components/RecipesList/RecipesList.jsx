import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { recipesSelector } from '../../store/recipes/selectors';
import { Recipe } from '../Recipe/Recipe';
import { setRecipesThunk } from '../../store/recipes/thunk';

export const RecipesList = () => {
    const dispatch = useDispatch();
    const recipes = useSelector(recipesSelector);

    useEffect(() => {
        dispatch(setRecipesThunk());        
    }, [])

    if (!recipes.length > 0) {
        return <h2 className='empty-page-header'>Add your first recipe...</h2>;
    }

    return (
        <>
            {recipes.map((recipe) => {
                return <Recipe key={recipe.id} recipe={recipe} />
            })}
        </>
    );
}



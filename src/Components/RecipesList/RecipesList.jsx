import { useRecipes } from '../../hooks/useRecipes';
import { Recipe } from '../Recipe/Recipe';
 
export const RecipesList = () => {
    const [recipes] = useRecipes();
    
    return (
        <>
            {recipes.map((recipe) => {
                return <Recipe key={recipe.id} recipe={recipe} />
            })}
        </>
    );
}



import { useState } from 'react';
import { useRecipes } from '../../hooks/useRecipes';
 
const AddRecipe = () => {
    const [ingredients, setIngredient] = useState([]);
    const [, setRecipes] = useRecipes();


    console.log(ingredients)
    function addIng(e) {
        e.preventDefault();

        setIngredient(p => {
            return [
                ...p,
                {
                    name: e.target.ing.value.trim(),
                    amount: e.target.amt.value.trim()
                }
            ]
        })

    }

    function addRecipe(e) {
        e.preventDefault();

        setRecipes(p => {
            return [
                ...p,
                {
                    id: Date.now(),
                    name: e.target.name.value.trim(),
                    ingredients
                }
            ]
        })
    }
    return (
        <>
            <form action='#' onSubmit={addRecipe}>
                <input type="text" name='name' placeholder='Recipe name' />
                <button type='submit'>Add Recipe</button>
            </form>

            {ingredients.map((ingredient) => {
                return <li key={ingredient.name}>{ingredient.name}<span> - {ingredient.amount}</span></li>
            })}

            <form action='#' onSubmit={addIng}>
                <input type="text" name='ing' placeholder='Ingredient' />
                <input type="text" name='amt' placeholder='Amount' />
                <button type='submit'>Add Ingredient</button>
            </form>
            
           
        </>
    );
}

export default AddRecipe;

import { RecipesContext } from '../Context/recipesContext';
import { useContext } from 'react';

export function useRecipes() {
    return useContext(RecipesContext);
}
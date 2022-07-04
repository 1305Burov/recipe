import { createContext, useState, useEffect } from 'react';
import { getRecipes } from '../api/recipes';

export const RecipesContext = createContext();

export default function RecipesProvider ({ children }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes()
            .then((recipes) => setRecipes(recipes))
            .catch((error) => {
                alert('Something wrong! Try again later.');
                console.error(error);
            });
    }, []);

    return (
        <RecipesContext.Provider value={[recipes, setRecipes]}>
            {children}
        </RecipesContext.Provider>
    )
}

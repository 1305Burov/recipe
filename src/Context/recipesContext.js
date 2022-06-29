import {createContext, useState} from 'react';

export const RecipesContext = createContext();

const recipesList = [
    {
        id: 1, 
        name: 'Some name',
        ingredients: [
            {
                name: 'some ingredient 1',
                amount: '20 ml'
            },
            {
                name: 'some ingredient 2',
                amount: '40 ml'
            }
        ]
    },
    {
        id: 2, 
        name: 'Some name 2',
        ingredients: [
            {
                name: 'some ingredient 1',
                amount: '200 ml'
            },
            {
                name: 'some ingredient 2',
                amount: '80 ml'
            },
            {
                name: 'some ingredient 3',
                amount: '1 piece'
            }
        ]
    }
]

export default function RecipesProvider ({ children }) {
    const [recipes, setRecipes] = useState(recipesList);

    return (
        <RecipesContext.Provider value={[recipes, setRecipes]}>
            {children}
        </RecipesContext.Provider>
    )
}

import { Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import RecipesProvider from "./Context/recipesContext";
import { RecipesList } from './Components/RecipesList/RecipesList';
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import RecipeData from './Components/RecipeData/RecipeData';

 
export default function App() {
    return (
        <>
            <header className="container header">
                <h1><Link to="/" className="header__logo">Recipes</Link></h1>
                <Link to="/adding" className="header__adding-link">Add Recipe</Link> 
            </header>
            <RecipesProvider>
               
                <section className="container recipes">
                    <Routes>
                        <Route
                            path="/recipe/:recipeId"
                            element={
                                <Suspense>
                                    <RecipeData />
                                </Suspense>
                            }
                        />

                        <Route path="/adding" 
                        element={
                            <Suspense>
                                <AddRecipe />
                            </Suspense>
                        } />
                        <Route path="/" element={
                            <RecipesList />
                        }/>
                    </Routes>
                </section>
            </RecipesProvider>
        </>
    )
}


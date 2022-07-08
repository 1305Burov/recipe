import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { RecipesList } from './Components/RecipesList/RecipesList';
import AddRecipe from "./Components/AddRecipe/AddRecipe";
import RecipeData from './Components/RecipeData/RecipeData';
import Header from './Components/Header/Header';
 
export default function App() {
    return (
        <>
            <Header />
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

                    <Route path="*" element={<h1 className='empty-page-header'>Page not found!</h1>} />
                </Routes>
            </section>
        </>
    )
}


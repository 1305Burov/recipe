import RecipesProvider from "./Context/recipesContext";
import { RecipesList } from './Components/RecipesList/RecipesList';
import AddRecipe from "./Components/AddRecipe/AddRecipe";


export default function App() {
    return (
        <>
            <header className="container header">
                <h1><a href="/" className="logo">Recipes</a></h1>
            </header>
            <RecipesProvider>
                <section className="container recipes">
                    <AddRecipe />
                    <RecipesList />
                </section>
            </RecipesProvider>
        </>
    )
}


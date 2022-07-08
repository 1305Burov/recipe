import { createRecipe, deleteRecipe, getRecipes } from "../../api/recipes";
import { addRecipeAction, removeRecipeAction, setRecipesAction } from "./actionCreators";

export function setRecipesThunk() {
    return (dispatch, getState) => {
        getRecipes()
        .then((recipes) => dispatch(setRecipesAction(recipes)))
        .catch((error) => {
            alert('Something wrong! Try again later.');
            console.error(error);
        });
    }
}

export function removeRecipeThunk(navigate, id) {
    return (dispatch) => {
        deleteRecipe(id)
            .then((id) => {
                dispatch(removeRecipeAction(id))
                navigate('/');
            })
            .catch((err) => {
                console.error(err);
            })
    }
}

export function newRecipeThunk(navigate, newRecipe) {
    return (dispatch) => {
        createRecipe(newRecipe)
        .then((newRecipe) => {
            dispatch(addRecipeAction(newRecipe));
            navigate('/');
        })
        .catch((err) => {
            alert('Something wrong! Try again later.');
            console.error(err);
        })
    }
}
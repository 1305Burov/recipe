import { NEW_RECIPE, REMOVE_RECIPE, SET_RECIPES, UPDATE_RECIPE} from "./actionTypes";

export function addRecipeAction(recipe) {
    return {
        type: NEW_RECIPE,
        payload: recipe
    }
}
export function removeRecipeAction(recipeId) {
    return {
        type: REMOVE_RECIPE,
        payload: recipeId
    }
}
export function setRecipesAction(recipes) {
    return {
        type: SET_RECIPES,
        payload: recipes
    }
}
export function updateRecipeAction(recipe) {
    return {
        type: UPDATE_RECIPE,
        payload: recipe
    }
}
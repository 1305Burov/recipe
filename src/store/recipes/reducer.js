import { NEW_RECIPE, REMOVE_RECIPE, SET_RECIPES, UPDATE_RECIPE} from "./actionTypes";

const initialState = [];

export function recipesReducer(state = initialState, action) {
    switch (action.type) {
        case NEW_RECIPE:
            return [...state, action.payload];
        case REMOVE_RECIPE:
            return state.filter(recipe => recipe.id !== action.payload);
        case SET_RECIPES:
            return action.payload;
        case UPDATE_RECIPE:
            const recipeIdx = state.findIndex(recipe => recipe.id === action.payload.id);
            state[recipeIdx] = action.payload;
            return [...state];
        default:
            return state;
    }
}

 
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { recipesReducer } from "./recipes/reducer";


const rootReducer = combineReducers({
    recipes: recipesReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));
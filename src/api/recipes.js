import axios from 'axios';
import { BASE_URL } from '../constants';

const recipesApi = axios.create({
    baseURL: `${BASE_URL}/recipes`,
});

recipesApi.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export const getRecipes = () => recipesApi.get();
export const getRecipe = (recipeId) => recipesApi.get(`/${recipeId}`);
export const createRecipe = (newRecipe) => recipesApi.post('', newRecipe);
export const updateRecipe = (recipeId, updateData) =>
recipesApi.patch(`/${recipeId}`, updateData);
export const deleteRecipe = (recipeId) => recipesApi.delete(`/${recipeId}`);
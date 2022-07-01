import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecipes } from '../../hooks/useRecipes';
import shake from '../../img/Shake.png';
import build from '../../img/Build.svg'; 
import stir from '../../img/Stir.svg'; 
 
const AddRecipe = () => {
    const [ingredients, setIngredients] = useState([]);
    const [, setRecipes] = useRecipes();
    const navigate = useNavigate();

    function addIng(e) {
        e.preventDefault();
        const name = e.target.ing.value.trim();
        const amount = e.target.amt.value.trim();
        const measuring = e.target.measuring.value;

        setIngredients(p => {
            const isRepeat = [...p].some(ing => ing.name === name);
            
            if (!isRepeat) {
                return [
                    ...p,
                    {
                        name,
                        amount : amount + measuring
                    }
                ]
            }else {
                return [
                    ...p,
                ]
            }
        })
        e.target.reset();
    }


    function removeIng(e) {
        e.preventDefault();
        const removeIng = e.target.closest('li').textContent;

        setIngredients(p => {
            return [...p.filter((i) => `${i.name} - ${i.amount}` !== removeIng)]
        })

    }

    function addRecipe(e) {
        e.preventDefault();
        if (ingredients.length > 0) {
            setRecipes(p => {
                return [
                    ...p,
                    {
                        id: Date.now(),
                        name: e.target.name.value.trim(),
                        method: e.target.method.value || 'Build',
                        ingredients
                    }
                ]
            })
    
            navigate('/');
        }
    }

    return (
        <div className='form form__box'>
            <form className='form__form form-recipe' action='#' onSubmit={addRecipe}>
                <div className='form__radio'>
                    <label>
                        <input type="radio" name="method" value="Shake"  />
                        <img className='form__radio__img' draggable='false' src={shake} alt="Shake" />
                    </label>

                    <label>
                        <input type="radio" name="method" value="Build" />
                        <img className='form__radio__img' draggable='false' src={build} alt="Build" />
                    </label>

                    <label>
                        <input type="radio" name="method" value="Stir" />
                        <img className='form__radio__img' draggable='false' src={stir} alt="Stir" />
                    </label>
                </div>
                <input className='form__input form__input__recipe' type="text" name='name' placeholder='Recipe name' required />
                <button className='form__button-add-rec' type='submit'>Add Recipe</button>
            </form>

            {ingredients.map((ingredient) => {
                return <li className='form__li' key={ingredient.name}>{ingredient.name}<span> - {ingredient.amount}</span><button className='button delete' onClick={removeIng}></button></li>
            })}

            <form className='form__form' action='#' onSubmit={addIng}>
                <input className='form__input' type="text" name='ing' placeholder='Ingredient' required />
                <input className='form__input' type="number" name='amt' placeholder='Amount' required />
                <select className='form__input form__select' type="select" name='measuring' required>
                    <option value=" ml" defaultValue>ml</option>
                    <option value=" dash" >dash</option>
                    <option value=" splash">splash</option>
                    <option value=" spoon">spoon</option>
                </select>
                <button className='button form__button-add-ing' type='submit'></button>
            </form>
        </div>
    );
}

export default AddRecipe;

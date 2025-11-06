import {useState, useEffect} from "react";
import useFetch  from "./useFetch.js";
import {API_ENDPOINTS} from "../api/apiConfig.js";

const BASE_URL = import.meta.env.VITE_API_URL;

function useRecipes() {
    const [recipes, setRecipes] = useState(null);
    const {data: initialRecipes, isLoading, error} = useFetch(API_ENDPOINTS.recipes)


    useEffect(() => {
        if (initialRecipes) {
            setRecipes(initialRecipes)
        }
    }, [initialRecipes])

    const toggleFavorite = async (id, currentStatus) => {
        const updatedRecipeData = {
            isFavorite: !currentStatus
        };

        try {
            const response = await fetch(`${BASE_URL}${API_ENDPOINTS.recipes}/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedRecipeData)
            })

            if(!response.ok) {
                throw new Error('Не удалось обновить рецепт')
            }

            const updatedRecipe = await response.json()

            setRecipes(prevRecipes => prevRecipes.map(recipe => recipe.id === id ? updatedRecipe : recipe));
        }catch (err) {
            console.log(err.message)
        }
    }

    return { recipes, isLoading, error, toggleFavorite };
}

export default useRecipes;
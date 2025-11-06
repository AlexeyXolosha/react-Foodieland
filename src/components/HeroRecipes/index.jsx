import {RecipeCard} from "../index.js";
import useRecipes from "../../hooks/useRecipes.js";

function HeroRecipes() {
    const {recipes, isLoading, error, toggleFavorite} = useRecipes()

    return (
        <section className="section-recipes recipes">
            <div className="container">

                <div className="recipes__head">
                    <h2 className="recipes__title">Simple and tasty recipes</h2>
                    <p className="recipes__description">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                </div>

                <ul className="recipes__list">
                    {recipes && recipes.map(recipe => (
                        <li className="recipes__item" key={recipe.id}>
                            <RecipeCard data={recipe} />
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}

export default HeroRecipes
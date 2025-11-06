import {Tag} from "../index.js";
import "./style.scss";

function RecipeCard({ data: { title, time, category, image, isFavorite } }) {
    return(
        <a className="recipe-card">
            <div className="recipe-card__inner">
                <div className="recipe-card__image">
                    <div className="favorites"></div>
                    <img src={image} alt=""/>
                </div>

                <div className="recipe-card__info">
                    <h3 className="recipe-card__title">{title}</h3>

                    <div className="recipe-card__info-items">
                        <Tag iconSrc={time?.icon} text={time?.label} />
                        <Tag iconSrc={category?.icon} text={category?.name} />
                    </div>

                </div>

            </div>
        </a>
    )
}

export default RecipeCard
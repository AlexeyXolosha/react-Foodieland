import {ButtonLink, CategoryCard} from "../index.js";
import useFetch from "../../hooks/useFetch.js";
import {API_ENDPOINTS} from "../../api/apiConfig.js";
import "./style.scss"

function HeroCategory() {
    const {data: category, isLoading, error} = useFetch(API_ENDPOINTS.categories)

    return (
        <section className="section-category category">
            <div className="container">

                <div className="category__head">
                    <h2 className="title">Categories</h2>
                    <ButtonLink className="hero-show-all">
                        <p className="text">View All Categories</p>
                    </ButtonLink>
                </div>

                <ul className="category__list">
                    {category && category.map(item => (
                        <li key={item.id}>
                            <CategoryCard style={{background: item?.background}} title={item?.title}
                                          imageSRC={item?.image}/>
                        </li>
                    ))}
                </ul>

            </div>
        </section>
    )
}

export default HeroCategory
import {ButtonLink} from "../index.js";
import useFetch from "../../hooks/useFetch.js";
import {API_ENDPOINTS} from "../../api/apiConfig.js";

function HeroCategory() {
    const {data: category, isLoading, error} = useFetch(API_ENDPOINTS.categories)


    return (
        <section className="section-category category">
            <div className="container">

                <div className="category__head">
                    <h2 className="title">Categories</h2>
                    <ButtonLink>
                        <p className="text">View All Categories</p>
                    </ButtonLink>
                </div>

                <div className="category__list">
                    <ul>
                        {category && category.map(category => (
                            <li key={category.id}>

                            </li>
                        ))}
                    </ul>
                </div>


            </div>
        </section>
    )
}

export default HeroCategory
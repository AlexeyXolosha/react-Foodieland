import './style.scss'

function CategoryCard({title, imageSRC, style}) {
    return(
        <article className="category-card">
            <div className="category-card__inner" style={style}>

                <div className="category-card__head">
                    <img src={imageSRC} alt=""/>
                </div>

                <div className="category-card__footer">
                    <p className="category-card__title">{title}</p>
                </div>

            </div>
        </article>
    )
}

export default CategoryCard
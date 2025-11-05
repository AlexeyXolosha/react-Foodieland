import "./style.scss";
function Tag({text, iconSrc}) {
    return(
        <div className="tag">
            <div className="tag__inner">
                {iconSrc && <img src={iconSrc} alt="" className="tag__icon" />}
                {text && <p className="tag__text">{text}</p>}
            </div>
        </div>
    )
}

export default Tag
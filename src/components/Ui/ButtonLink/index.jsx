import "./style.scss"

function ButtonLink({ children, href }) {
    return (
        <a href={href} className="button-link">
            {children}
        </a>
    )
}

export default ButtonLink;
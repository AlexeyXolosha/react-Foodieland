import "./style.scss"

function ButtonLink({children, href, className}) {
    return (
        <a href={href} className={["button-link", className].filter(Boolean).join(" ")}>
            {children}
        </a>
    )
}

export default ButtonLink;
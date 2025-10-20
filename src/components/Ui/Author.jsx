import author from '../../assets/image/author.png'

function Author() {
    return(
        <div className="author">
            <div className="author__inner">
                <div className="author__img">
                    <img src={author} alt=""/>
                </div>
                <div className="author__info">
                    <p className="author__name">John Smith</p>
                    <p className="author__date">15 March 2022</p>
                </div>
            </div>
        </div>
    )
}

export default Author
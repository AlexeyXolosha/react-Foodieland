import {Author} from "../index.js";

function Hero() {
    return (
        <section className="hero">
            <div className="hero__inner container">
                <div className="hero__info">

                    <div className="hero__info-head">
                        <h2 className="hero__title">Spicy delicious chicken wings</h2>
                        <p className="hero__description">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>

                    <div className="hero__info-footer">
                        <Author></Author>
                    </div>

                </div>
                <div className="hero__media"></div>
            </div>
        </section>
    )
}

export default Hero;
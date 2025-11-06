import './style.scss';
import {Author, ButtonLink, Tag} from "../index.js";
import playIcon from '/src/assets/icon/play.svg';

import TimerSrc from '/src/assets/icon/Timer.svg';
import ForkKnife from '/src/assets/icon/ForkKnife.svg';

import heroBanner from '/src/assets/image/hero-banner.png';

function Hero() {
    return (
        <section className="hero">
            <div className="hero__inner container">

                <div className="hero__info">

                    <div className="hero__info-head">
                        <h2 className="hero__title">Spicy delicious chicken wings</h2>
                        <p className="hero__description">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>

                        <div className="hero__info-tag">
                            <Tag iconSrc={TimerSrc} text="30 Minutes"></Tag>
                            <Tag iconSrc={ForkKnife} text="Chicken"></Tag>
                        </div>

                    </div>

                    <div className="hero__info-footer">
                        <Author></Author>
                        <ButtonLink>
                            <span>View Recipes</span>
                            <div className="icon">
                                <img src={playIcon} alt=""/>
                            </div>
                        </ButtonLink>
                    </div>
                </div>

                <div className="hero__media">
                    <img src={heroBanner} alt=""/>
                </div>
            </div>
        </section>
    )
}

export default Hero;
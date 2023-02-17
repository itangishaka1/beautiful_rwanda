import './Navigation.scss'

const Navigation = () => {
    return(
        <div className="navigation">
            <input type="checkbox" className="navigation__checkbox" id='nav-toggle' />
            <label htmlFor="nav-toggle" className="navigation__button">
                <span className="navigation__icon">&nbsp;</span>
            </label>
            <div className="navigation__background">&nbsp;</div>
            <nav className="navigation__nav">
                <ul className="navigation__list">
                    <li className="navigation__item"><a href="#about" className="navigation__link"><span>01</span>About Natour</a></li>
                    <li className="navigation__item"><a href="#features" className="navigation__link"><span>02</span>Your benefits</a></li>
                    <li className="navigation__item"><a href="#section-tours" className="navigation__link"><span>03</span>Popular tours</a></li>
                    <li className="navigation__item"><a href="#stories" className="navigation__link"><span>04</span>Stories</a></li>
                    <li className="navigation__item"><a href="#booking" className="navigation__link"><span>04</span>Book now</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
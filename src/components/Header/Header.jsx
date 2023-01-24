import "./Header.scss";
import Logo from "../../img/logo-white.png";
import Button from "../Button/Button";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={Logo} alt="Logo" className="header__logo" />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">visit rwanda</span>
          <span className="heading-primary--sub">the country of 1000 hills</span>
        </h1>
        <Button text='discover our tours' className='btn--white' />
      </div>
    </header>
  );
};

export default Header;

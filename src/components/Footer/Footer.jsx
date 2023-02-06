import "./Footer.scss";
import Logo from "../../img/logo-green-2x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box u-margin-bottom-big">
        <img src={Logo} alt="Full logo" className="footer__logo" />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#link" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__link">
                  Private Policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#link" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="#abdullah" className="footer__link">
              Abdullah Itangishaka
            </a>{" "}
            for his practice{" "}
            <a href="#link" className="footer__link">
              Visit Rwanda
            </a>.
            <br/>Copyright &copy; by Abdullah Itangishaka. You are 100% to use this
            page for person and commercial use, but NOT to claim it as your own
            design. A credit to the original author, Abdullah Itangishaka, is of
            course highly appriciated!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

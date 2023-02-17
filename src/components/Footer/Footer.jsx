import "./Footer.scss";
import Logo from "../../img/logo-green-2x.png";
import LogoSmall from "../../img/logo-green-1x.png";

import LogoS from "../../img/logo-green-small-2x.png";
import LogoS2 from "../../img/logo-green-small-1x.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box u-margin-bottom-big">
        {/* 
          https://www.npmjs.com/package/react-responsive-picture
          or
          https://crystallize.com/blog/react-srcset-for-responsive-images
            Use this instead for responsive images
         */}
        <picture className="footer__logo">
          <source
            media="(max-width:37.5em)"
            srcSet={`${LogoS2} 1x, ${LogoS} 2x`}
          />
          <img srcSet={`${LogoSmall} 1x, ${Logo} 2x`} alt="Full logo" />
        </picture>
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
            </a>
            .
            <br />
            Copyright &copy; by Abdullah Itangishaka. You are 100% to use this
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

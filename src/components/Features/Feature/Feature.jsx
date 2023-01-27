import "./Feature.scss";
import "../../Grid-test/Grid_test.scss";


const Feature = ({ icon, title, text }) => {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className={`feature-box__icon ${icon}`}></i>
        <h3 className="heading-tertiary u-margin-bottom-small">
          {title}
        </h3>
        <p className="feature-box__text">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Feature;

import "./Popup.scss";
import Photo1 from "../../img/nat-8.jpg";
import Photo2 from "../../img/nat-9.jpg";
import Button from "../Button/Button";

const Popup = () => {
  return (
    <article className="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={Photo1} alt="Tour" className="popup__img" />
          <img src={Photo2} alt="Tour" className="popup__img" />
        </div>
        <div className="popup__right">
          <h2 className="section-heading u-margin-bottom-small">start booking now</h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            Important &ndash; Please read these terms before booking
          </h3>
          <p className="popup__text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ea
            labore ex provident pariatur animi! Distinctio hic repellendus atque
            illum quae, ipsum animi quisquam dolore, fugiat enim eius, culpa aut
            ipsam aperiam odit cumque illo sed aliquam laborum omnis modi
            voluptas facere? Aut excepturi odio soluta nemo accusantium? Labore,
            voluptates?
          </p>
          <Button 
             className='btn--green'
             text = 'Book Now'
          />
        </div>
      </div>
    </article>
  );
};

export default Popup;

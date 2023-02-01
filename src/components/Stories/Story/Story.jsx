import "./Story.scss";

import People1 from '../../../img/nat-8.jpg'

const Story = () => {
  return (
    <article className="story">
      <figure className="story__shape">
        <img src={People1} alt="person on a tour" className="story__img" />
      </figure>
      <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">
          I had the best week ever with my family
        </h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
          ducimus atque nulla vel sit tempore fugiat autem pariatur labore sunt.
          Natus ducimus atque nulla vel sit tempore fugiat autem pariatur labore
          Natus ducimus atque nulla vel sit tempore fugiat autem pariatur labore
          sunt.
        </p>
      </div>
    </article>
  );
};

export default Story;

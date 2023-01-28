import "./Tours.scss";
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="section-heading">most popular tours</h2>
      </div>
      <Tour  card_number='card__side--back--1' />
    </section>
  );
};

export default Tours;

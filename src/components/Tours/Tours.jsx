import "./Tours.scss";
import Tour from './Tour'

const Tours = () => {
  return (
    <section className="tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="section-heading">most popular tours</h2>
      </div>
      <Tour  
            // Front side
            picture_number='card__picture--1'
            heading='the sea explorer' 
            heading_span='card__heading-span--1'
            details='details'
            item1 = '3 day tours'
            item2 = 'Up to 30 people'
            item3 = '2 tour guides'
            item4 = 'sleep in cozy hotels'
            item5 = 'Difficulty: easy'

            // Back side
            card_number='card__side--back--1' 
        />
    </section>
  );
};

export default Tours;

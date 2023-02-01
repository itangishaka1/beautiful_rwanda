import "./Tours.scss";
import Tour from "./Tour";
import Button from "../Button/Button";

const Tours = () => {
  return (
    <section className="tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="section-heading">most popular tours</h2>
      </div>

      <article className="row">
        <div className="col-1-of-3">
          <Tour
            // Front side
            picture_number="card__picture--1"
            heading="the sea explorer"
            heading_span="card__heading-span--1"
            details="details"
            item1="3 day tours"
            item2="Up to 30 people"
            item3="2 tour guides"
            item4="sleep in cozy hotels"
            item5="Difficulty: easy"
            // Back side
            card_number="card__side--back--1"
            price_value="299"
          />
        </div>

        <div className="col-1-of-3">
          <Tour
            // Front side
            picture_number="card__picture--2"
            heading="the forest hiker"
            heading_span="card__heading-span--2"
            details="details"
            item1="4 day tours"
            item2="Up to 40 people"
            item3="6 tour guides"
            item4="sleep in provided"
            item5="Difficulty: medium"
            // Back side
            card_number="card__side--back--2"
            price_value="399"
          />
        </div>

        <div className="col-1-of-3">
          <Tour
            // Front side
            picture_number="card__picture--3"
            heading="the snow adventurer"
            heading_span="card__heading-span--3"
            details="details"
            item1="5 day tours"
            item2="Up to 15 people"
            item3="3 tour guides"
            item4="sleep in provided tents"
            item5="Difficulty: hard"
            // Back side
            card_number="card__side--back--3"
            price_value="599"
          />
        </div>
      </article>
      <div className="u-center-text u-margin-top-huge">
      <Button 
       text='discover all tours'
       className='btn--green'
       />
       </div>
       
    </section>
  );
};

export default Tours;

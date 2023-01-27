import "./About.scss";
import "../Grid-test/Grid_test.scss";
import Photo1 from "../../img/nat-1-large.jpg";
import Photo2 from "../../img/nat-2-large.jpg";
import Photo3 from "../../img/nat-3-large.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="about__heading">
          Exciting tours for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with Rwanda
          </h3>
          <p className="about__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
            placeat sapiente eum perferendis consequatur eaque repellat,
            laboriosam recusandae suscipit, magnam asperiores a facilis odit
            culpa sequi qui sunt id. Amet.
          </p>
          <h3 className="heading-tertiary  u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="about__paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            maxime ex sunt laborum, est iure maiores quam nihil totam omnis
            delectus esse.
          </p>
          <a href="#about" className="about__btn-text" id="about">
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={Photo1}
              alt="Nyungwe forest"
              className="composition__photo composition__photo--p1"
            />
            <img
              src={Photo2}
              alt="National akagera park"
              className="composition__photo composition__photo--p2"
            />
            <img
              src={Photo3}
              alt="Kinigi gorillas park"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import "./About.scss";
import "../Grid-test/Grid_test.scss";
import Photo1 from "../../img/nat-1.jpg";
import Photo1Large from "../../img/nat-1-large.jpg";
import Photo2 from "../../img/nat-2.jpg";
import Photo2Large from "../../img/nat-2-large.jpg";
import Photo3 from "../../img/nat-3.jpg";
import Photo3Large from "../../img/nat-3-large.jpg";
import ButtonText from "../Button/ButtonText/ButtonText";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="section-heading">
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
          <ButtonText href="#about" id="about" text="Learn more &rarr;" />
        </div>
        <div className="col-1-of-2">
          <div className="composition">

            {/* density switching */}
            <img
              srcSet={`${Photo1} 300w, ${Photo1Large} 1000w`}
              alt="Nyungwe forest"
              sizes="(max-width:900px) 20vw, (max-width:600px) 30vw, 300px"
              className="composition__photo composition__photo--p1"
              src={Photo1Large}
            />
            <img
              srcSet={`${Photo2} 300w, ${Photo2Large} 1000w`}
              alt="National akagera park"
              sizes="(max-width:900px) 20vw, (max-width:600px) 30vw, 300px"
              className="composition__photo composition__photo--p2"
              src={Photo2Large}
            />
            <img
              srcSet={`${Photo3} 300w, ${Photo3Large} 1000w`}
              alt="Kinigi gorillas park"
              sizes="(max-width:900px) 20vw, (max-width:600px) 30vw, 300px"
              className="composition__photo composition__photo--p3"
              src={Photo3Large}
            />
            {/* <img
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
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

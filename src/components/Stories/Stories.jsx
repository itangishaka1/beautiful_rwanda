import "./Stories.scss";
import Story from "./Story/Story";
import People1 from "../../img/nat-8.jpg";
import People2 from "../../img/nat-9.jpg";
import ButtonText from "../Button/ButtonText/ButtonText";
import Video from "../Video/Video";

const Stories = () => {
  return (
    <section className="stories">
     <Video />
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="section-heading">we make people genuinely happy</h2>
      </div>
      <div className="row">
        <Story
          person={People1}
          caption="Marry smith"
          heading="I had the best week ever with my family"
          story="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            ducimus atque nulla vel sit tempore fugiat autem pariatur labore sunt.
            Natus ducimus atque nulla vel sit tempore fugiat autem pariatur labore
            Natus ducimus atque nulla vel sit tempore fugiat autem pariatur labore
            sunt."
        />
      </div>
      <div className="row">
        <Story
          person={People2}
          caption="John James"
          heading="WOW! What amazing country"
          story="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus
            ducimus atque nulla vel sit tempore fugiat autem pariatur labore sunt.
            Natus ducimus atque nulla vel sit tempore fugiat autem pariatur labore
            Natus ducimus atque nulla vel."
        />
      </div>
      <div className="u-margin-top-huge u-center-text">
        <ButtonText text="Read all stories &rarr;" href="#about" id="about" />
      </div>
    </section>
  );
};

export default Stories;

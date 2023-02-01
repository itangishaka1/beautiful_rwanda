import "./Stories.scss";
import Story from "./Story/Story";

const Stories = () => {
  return (
    <section className="stories">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="section-heading">we make people genuinely happy</h2>
      </div>
      <div className="row">
        <Story />
      </div>
    </section>
  );
};

export default Stories;

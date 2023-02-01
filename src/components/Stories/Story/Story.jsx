import "./Story.scss";

const Story = ({ person, caption, heading, story }) => {
  return (
    <article className="story">
      <figure className="story__shape">
        <img src={person} alt="person on a tour" className="story__img" />
        <figcaption className="story__caption">{caption}</figcaption>
      </figure>
      <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
        <p>{story}</p>
      </div>
    </article>
  );
};

export default Story;

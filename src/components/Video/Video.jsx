import "./Video.scss";
import Video1 from "../../img/video.mp4";
import Video2 from "../../img/video.webm";

const Video = () => {
  return (
    <article className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src={Video1} type="video/mp4" />
        <source src={Video2} type="vidoe/webm" />
        Your browser is not supported!
      </video>
    </article>
  );
};

export default Video;

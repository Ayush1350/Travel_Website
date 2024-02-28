import PropTypes from "prop-types";
import ReactPlayer from "react-player";
import "./Hero.css";

function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        {props.isVideo ? (
          <div className="video-container">
            <ReactPlayer
              url={props.heroMedia}
              playing
              loop={true}
              muted
            />
          </div>
        ) : (
          <img alt="heroImg" src={props.heroImg} />
        )}

        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url} className={props.btnClass}>
            {props.buttonText}
          </a>
        </div>
      </div>
    </>
  );
}

Hero.propTypes = {
  cName: PropTypes.string,
  heroMedia: PropTypes.string,
  heroImg: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  btnClass: PropTypes.string,
  buttonText: PropTypes.string,
  isVideo: PropTypes.bool,
};

export default Hero;

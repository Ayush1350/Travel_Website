import PropTypes from 'prop-types';
import "../destination/Destination.css";

function DestinationData(props) {
  return (
    <>
      <div className={props.className}>
        <div className="des-text">
          <h2>{props.heading}</h2>
          <p>{props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={props.img1} />
          <img alt="img" src={props.img2} />
        </div>
      </div>
    </>
  );
}

DestinationData.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
  };

export default DestinationData;
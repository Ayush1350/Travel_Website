import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "/src/components/servicePageComponents/ServicePageComponents.css";

function ServicePageComponentsData(props) {


  return (
    <>
     <div className={props.className}>
      <div className="servicePageComponent-text">
        <h2>{props.heading}</h2>
        <p>{props.text}</p>
        <Link to={props.buttonLink}>
          <button id='ServicePageComponentsBtn'> Book Now</button>
        </Link>
      </div>
      <div className="image">
        <img alt="img" src={props.img1} />
        <img alt="img" src={props.img2} />
      </div>
    </div>
    </>
  );
}

ServicePageComponentsData.propTypes = {
    heading: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    img1: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    buttonLink: PropTypes.string
  };

export default ServicePageComponentsData;
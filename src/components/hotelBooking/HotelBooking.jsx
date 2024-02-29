import "./HotelBooking.css";
import PropTypes from "prop-types";

function HotelBooking(props) {
  return (
    <>
      <div className="hotelBooking-card">
        <div className="hotelBooking-image">
          <img alt="hotelBooking-img" src={props.image} />
        </div>

        <h2>{props.heading}</h2>
        
        <h4>{props.stay}</h4>


        <ul>
          {Array.isArray(props.li) ? (
            props.li.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>{props.li}</li>
          )}
        </ul>
    <button className="hotelBookingBtn">Book Now</button>

      </div>
    </>
  );
}

HotelBooking.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  stay: PropTypes.string,


  li: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default HotelBooking;

import "/src/components/trip/Service.css"
import PropTypes from "prop-types";


function HotelData(props) {
  return (
    <>



    
    <div className="t-card" onClick={props.onClick}>

    <div className="t-image">
        <img alt="t-img" src={props.image}/>
    </div>

    <h4>{props.heading}</h4>
    <h2>{props.price}</h2>

    <p>{props.text}</p>



    </div>


    
    </>
  )
}

HotelData.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.string,
    onClick: PropTypes.func,
    
  };

export default HotelData
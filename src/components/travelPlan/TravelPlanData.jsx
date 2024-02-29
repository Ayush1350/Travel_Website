import "/src/components/travelPlan/TravelPlanData.css";
import PropTypes from "prop-types";

function TravelPlanData(props) {
  return (
    <>
      <div className="travelPlan-card" onClick={props.onClick}>
  <div className="travelPlan-image">
    <img alt="travelPlan-img" src={props.image} />
  </div>

  <div className="travelPlanDiv">
    <div className="travelHeadingText">
      <p>{props.text}</p>
      <h2>{props.price}</h2>
    </div>

    <div>
      <h4>{props.heading}</h4>
    </div>
  </div>
</div>

    </>
  );
}

TravelPlanData.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.string,
  onClick: PropTypes.func,
};

export default TravelPlanData;

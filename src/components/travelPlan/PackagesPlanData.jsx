import "./PackagesPlanData.css";
import PropTypes from "prop-types";

function PackagesPlanData(props) {
  return (
    <>
      <div className="packagesPlanData-card">
        <div className="packagesPlanData-image">
          <img alt="packagesPlanData-img" src={props.image} />
        </div>

        <div className="packagesData">

        <h2>{props.heading}</h2>
        
        <h4>{props.stay}</h4>

        </div>
        


        <ul>
          {Array.isArray(props.li) ? (
            props.li.map((item, index) => <li key={index}>{item}</li>)
          ) : (
            <li>{props.li}</li>
          )}
        </ul>

        <div className="bottomDiv">

            <div className="priceContainer">

            <p className="startFrom">Starting From</p>

            <p className="priceOfPackages">{props.price}</p>

            </div>


            <button className="packagesPlanDataBtn">Book Now</button>

        </div>



      </div>
    </>
  );
}

PackagesPlanData.propTypes = {
  image: PropTypes.string,
  heading: PropTypes.string,
  stay: PropTypes.string,
  price: PropTypes.string,



  li: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default PackagesPlanData;

import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './FlightBooking.css';

function FlightBookingData({ fromOptions, toOptions, onBookFlight, calculateTotalCost, totalCost }) {
  const defaultFromValue = fromOptions.length > 0 ? fromOptions[3].label : '';
  const defaultToValue = toOptions.length > 0 ? toOptions[494].label : '';

  useEffect(() => {
    calculateTotalCost();
  }, [calculateTotalCost]);

  const handleInputChange = () => {
    calculateTotalCost();
  };

  return (
    <div className="flight-booking-form">
      <label htmlFor="from">From:</label>
      <input
        type="text"
        id="from"
        className="from"
        list="fromOptionsList"
        defaultValue={defaultFromValue}
      />
      <datalist id="fromOptionsList">
        {fromOptions.map((option) => (
          <option key={option.value} value={option.label} />
        ))}
      </datalist>

      <label htmlFor="to">To:</label>
      <input
        type="text"
        id="to"
        className="to"
        list="toOptionsList"
        defaultValue={defaultToValue}
      />
      <datalist id="toOptionsList">
        {toOptions.map((option) => (
          <option key={option.value} value={option.label} />
        ))}
      </datalist>

      <label htmlFor="departure-date">Departure Date:</label>
      <input type="date" id="departure-date" className="departure-date" />

      <label htmlFor="return-date">Return Date:</label>
      <input type="date" id="return-date" className="return-date" />

      <label htmlFor="travellers">Number of Travellers:</label>
      <input
        type="number"
        id="travellers"
        className="travellers"
        min="1"
        defaultValue="1"
        onChange={handleInputChange}
      />

      <label htmlFor="class">Class:</label>
      <select id="class" className="class" onChange={handleInputChange}>
        <option value="economy">Economy</option>
        <option value="business">Business</option>
        <option value="first-class">First Class</option>
      </select>

      <p>Total Cost: ${totalCost}</p>
      <button className="book-flight" onClick={onBookFlight}>
        Book Flight
      </button>
    </div>
  );
}

FlightBookingData.propTypes = {
  fromOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  toOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBookFlight: PropTypes.func.isRequired,
  calculateTotalCost: PropTypes.func.isRequired,
  totalCost: PropTypes.number.isRequired,
};

export default FlightBookingData;

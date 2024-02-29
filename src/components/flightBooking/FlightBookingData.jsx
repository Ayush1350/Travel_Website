import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './FlightBooking.css';

function FlightBookingData({ fromOptions, toOptions, calculateTotalCost, totalCost }) {
  const [showTicketDetails, setShowTicketDetails] = useState(false);

  const defaultFromValue = fromOptions.length > 0 ? fromOptions[3].label : '';
  const defaultToValue = toOptions.length > 0 ? toOptions[494].label : '';

  useEffect(() => {
    calculateTotalCost();
  }, [calculateTotalCost]);

  const handleInputChange = () => {
    calculateTotalCost();
  };

  const handleBookFlight = () => {
    setShowTicketDetails(true);
  };

  return (
    <div className="flight-booking-form">
      <label htmlFor="from">From:</label>
      <input type="text" id="from" className="from" list="fromOptionsList" defaultValue={defaultFromValue} />
      <datalist id="fromOptionsList">
        {fromOptions.map((option) => (
          <option key={option.value} value={option.label} />
        ))}
      </datalist>

      <label htmlFor="to">To:</label>
      <input type="text" id="to" className="to" list="toOptionsList" defaultValue={defaultToValue} />
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
      <button className="book-flight" onClick={handleBookFlight}>
        Book Flight
      </button>

      {showTicketDetails && (
    <div className="ticket-details">
      <h2>Ticket Details</h2>
      <table>
        <tbody>
          <tr>
            <td>From:</td>
            <td>{defaultFromValue}</td>
          </tr>
          <tr>
            <td>To:</td>
            <td>{defaultToValue}</td>
          </tr>
          <tr>
            <td>Departure Date:</td>
            <td>{document.getElementById('departure-date').value}</td>
          </tr>
          <tr>
            <td>Return Date:</td>
            <td>{document.getElementById('return-date').value}</td>
          </tr>
          <tr>
            <td>Number of Travellers:</td>
            <td>{document.getElementById('travellers').value}</td>
          </tr>
          <tr>
            <td>Class:</td>
            <td>{document.getElementById('class').value}</td>
          </tr>
          <tr>
            <td>Total Cost:</td>
            <td>${totalCost}</td>
          </tr>
        </tbody>
      </table>
      <button className='printFlightBookingBtn' onClick={() => window.print()}>Print</button>
    </div>
  )}
  
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

import { useEffect, useState } from 'react';
import FlightBookingData from './FlightBookingData';
import ServiceNavbar from "../../components/navbar/ServiceNavbar";
import Footer from "../../components/footer/Footer";



import './FlightBooking.css';

function FlightBooking() {
  const [fromOptions, setFromOptions] = useState([]);
  const [toOptions, setToOptions] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [numberOfTravellers, setNumberOfTravellers] = useState(1);
  const [selectedClass, setSelectedClass] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json');
        const data = await response.json();

        if (Array.isArray(data)) {
          const formattedData = data
            .filter(city => city && city.id && city.name)
            .map(city => ({ value: city.id, label: city.name }));

          setFromOptions(formattedData);
          setToOptions(formattedData);
        } else {
          console.error('Data is not in the expected format:', data);
        }
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateTotalCost = () => {
    const baseCost = 70;

    // Update state values
    const updatedDepartureDate = document.getElementById('departure-date').value;
    const updatedReturnDate = document.getElementById('return-date').value;
    const updatedNumberOfTravellers = parseInt(document.getElementById('travellers').value, 10);
    const updatedSelectedClass = document.getElementById('class').value;

    setDepartureDate(updatedDepartureDate);
    setReturnDate(updatedReturnDate);
    setNumberOfTravellers(updatedNumberOfTravellers);
    setSelectedClass(updatedSelectedClass);

    // Calculate the cost
    let classMultiplier = 1;

    switch (updatedSelectedClass) {
      case 'business':
        classMultiplier = 2;
        break;
      case 'first-class':
        classMultiplier = 5;
        break;

      default:
        break;
    }

    const calculatedCost = updatedNumberOfTravellers * baseCost * classMultiplier;
    setTotalCost(calculatedCost);
  };

  const onBooking = () => {
    // Check for empty fields
    if (!departureDate || !returnDate || numberOfTravellers < 1 || !selectedClass) {
      alert('Please fill in all the required fields.');
      return;
    }

    // Check for dates not in the past or today
    const currentDate = new Date();
    const selectedDepartureDate = new Date(departureDate);
    if (selectedDepartureDate < currentDate) {
      alert('Departure date cannot be in the past or today.');
      return;
    }

    const selectedReturnDate = new Date(returnDate);
    if (selectedReturnDate < currentDate) {
      alert('Return date cannot be in the past or today.');
      return;
    }

    alert(`Booking flight\nTotal Cost: $${totalCost}`);
  };

  return (
    <>

      <ServiceNavbar/>

      <h1 className='flightBookingH1'>Flight Booking</h1>
      <div className='flightBookingCard'>
        <FlightBookingData
          fromOptions={fromOptions}
          toOptions={toOptions}
          onBookFlight={onBooking}
          calculateTotalCost={calculateTotalCost}
          totalCost={totalCost}
        />
      </div>

      <Footer/>
    </>
  );
}

export default FlightBooking;

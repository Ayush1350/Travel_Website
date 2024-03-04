import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import Service from './routes/service/Service';
import Goa from './components/hotelBooking/Goa.jsx';
import Shimla from './components/hotelBooking/Shimla';
import Kerala from './components/hotelBooking/Kerala';
import FlightBooking from '/src/components/flightBooking/FlightBooking.jsx';
import HotelBooking from "/src/components/trip/hotelData/HotelServices.jsx"
import TravelPlan from './components/travelPlan/TravelPlan.jsx';
import GoaTravelPlan from './components/travelPlan/goaTravelPaln/GoaTravelPlan.jsx';
import ShimlaTravelPlan from './components/travelPlan/shimlaTravelPlan/ShimlaTravelPlan.jsx';
import KeralaTravelPlan from './components/travelPlan/keralaTravelPlan/KeralaTravelPlan.jsx';
import Error from './routes/pageNotFound/Error.jsx';
import "/src/App.css"






function App() {
  

  return (
    <>
    <Router> 
      

      
      <Routes>

      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path='/goa' element={<Goa/>} />
      <Route path='/shimla' element={<Shimla/>} />
      <Route path='/kerala' element={<Kerala/>} />
      <Route path='/flightBooking' element={<FlightBooking/>} />
      <Route path='/hotelBooking' element={<HotelBooking/>} />
      <Route path='/travelPlan' element={<TravelPlan/>} />
      <Route path='/goaTravelPlan' element={<GoaTravelPlan/>} />
      <Route path='/shimlaTravelPlan' element={<ShimlaTravelPlan/>} />
      <Route path='/keralaTravelPlan' element={<KeralaTravelPlan/>} />
      <Route path="*" element={<Error/>} />


      </Routes>
    </Router>
    </>
  )
}

export default App

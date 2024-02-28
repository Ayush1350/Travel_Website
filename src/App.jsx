import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './routes/home/Home';
import About from './routes/about/About';
import Contact from './routes/contact/Contact';
import Service from './routes/service/Service';
import Goa from './components/hotelBooking/Goa.jsx';
import Shimla from './components/hotelBooking/Shimla';
import Kerala from './components/hotelBooking/Kerala';




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

      </Routes>
    </Router>
    </>
  )
}

export default App

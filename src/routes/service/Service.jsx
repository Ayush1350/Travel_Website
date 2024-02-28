import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import ServiceImg from "/src/assets/service.jpg";
import HotelServices from "../../components/trip/hotelData/HotelServices";
import FlightBooking from "/src/components/flightBooking/FlightBooking.jsx"



function Service() {
  return (
    <>
    <Navbar/>
    <Hero
    
    cName="hero-mid"
    heroImg={ServiceImg}
    title="Services"

    
    />



    <HotelServices/>
    <FlightBooking/>
    
    <Footer/>
    </>
  )
}

export default Service
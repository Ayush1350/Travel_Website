import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import ServiceImg from "/src/assets/service.jpg";
import ServicePageComponents from "/src/components/servicePageComponents/ServicePageComponents.jsx";



function Service() {
  return (
    <>
    
    <Navbar/>
    <Hero
    
    cName="hero-mid"
    heroImg={ServiceImg}
    title="Services"

    
    />



   
    
    <ServicePageComponents/>
    <Footer/>
    </>
  )
}

export default Service
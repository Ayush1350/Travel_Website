import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero"

import ServiceImg from "/src/assets/service.jpg";


import ServiceNavbar from "../../components/navbar/ServiceNavbar";



function Service() {
  return (
    <>
    <ServiceNavbar/>
    <Hero
    
    cName="hero-mid"
    heroImg={ServiceImg}
    title="Services"

    
    />



   
    
    
    <Footer/>
    </>
  )
}

export default Service
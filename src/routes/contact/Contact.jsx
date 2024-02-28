import Navbar from "../../components/navbar/Navbar"
import Hero from "../../components/hero/Hero"
import ContactImg from "/src/assets/2.jpg";
import Footer from "../../components/footer/Footer";




function Contact() {
  return (
    <>
    <Navbar/>
    <Hero
    
    cName="hero-mid"
    heroImg={ContactImg}
    title="Contact"

    
    />

    <Footer/>
    
    </>
  )
}

export default Contact
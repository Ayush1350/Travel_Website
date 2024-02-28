import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import AboutImg from "/src/assets/night.jpg";



function About() {
  return (
    <>
    <Navbar/>
    
    <Hero
    
    cName="hero-mid"
    heroImg={AboutImg}
    title="About Page"
    text="In the quiet moments of life, we find the truest reflection of our soul"

    
    />

    <Footer/>
    
    </>
  )
}

export default About
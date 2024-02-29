import Destination from "../../components/destination/Destination"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import Trip from "../../components/trip/Trip"



function Home() {
  return (
    <>

    <Navbar/>
    
    <Hero
    
    // cName="hero"
    // heroImg="/src/assets/12.jpg"
    // title="Your Joourney Your Story"
    // text="Chhose Your Favourite Destination"
    // buttonText="Travel Plan"
    // url="/"
    // btnClass="show"

  
    cName="hero"
    heroMedia="/src/assets/travelVedio.mp4" // or video URL
    title="Your Journey Your Story"
    text="Choose Your Favourite Destination"
    buttonText="Travel Plan"
    url="/travelPlan"
    btnClass="show"
    isVideo={true} // Set to true for video, false for image


    
    />

    <Destination/>
    <Trip/>
    <Footer/>
    
    
    </>
  )
}

export default Home
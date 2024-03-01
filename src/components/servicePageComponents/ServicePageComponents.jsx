import ServicePageComponentsData from "./ServicePageComponentsData";
import ServicePageHotel1 from "/src/assets/ServicePageHotel1.jpg";
import ServicePageHotel2 from "/src/assets/ServicePageHotel2.jpg";
import ServicePageFlight1 from "/src/assets/ServicePageFlight1.jpg";
import ServicePageFlight2 from "/src/assets/ServicePageFlight2.jpg";
import ServicePageVacation1 from "/src/assets/ServicePageVacation1.jpg";
import ServicePageVacation2 from "/src/assets/ServicePageVacation2.jpg";

function ServicePageComponents() {
  return (
    <>
      <div className="servicePageComponent">
        <h1>Popular Services</h1>
        <p>Welcome to ExploreEra, where every destination is a story waiting to be told, and every journey is an adventure to remember. Discover our diverse range of services designed to cater to all your travel needs.</p>
      </div>

      <ServicePageComponentsData
  className="servicePageComponent-des"
  heading="Hotel Booking"
  text="Choose from our curated selection of hotels spanning across the globe. From boutique hotels nestled in the heart of cultural hubs to luxurious resorts offering panoramic views, we offer a diverse range of accommodations to suit your preferences and budget."
  img1={ServicePageHotel1}
  img2={ServicePageHotel2}
  buttonLink="/hotelBooking"
/>


      <ServicePageComponentsData
      className="servicePageComponent-des-reverse"
        heading="Flight Booking"
        text="Connect with any corner of the globe effortlessly. Whether it's a bustling metropolis, a serene beachfront, or a hidden gem, our flight booking services open up a world of possibilities, ensuring you reach your dream destination with ease."
        img1={ServicePageFlight1}
        img2={ServicePageFlight2}
  buttonLink="/flightBooking"

      />

<ServicePageComponentsData
      className="servicePageComponent-des"
        heading="Holiday Booking"
        text="Our Holiday Booking Services go beyond traditional packages. We believe every traveler is unique, and so are their vacation dreams. Immerse yourself in a tailor-made holiday experience that aligns with your preferences, ensuring every moment caters to your desires."
        img1={ServicePageVacation1}
        img2={ServicePageVacation2}
  buttonLink="/travelPlan"

      />

    </>
  );
}

export default ServicePageComponents;

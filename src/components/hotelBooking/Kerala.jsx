import ServiceNavbar from "/src/components/navbar/ServiceNavbar.jsx";
import HotelBooking from "./HotelBooking";
import Hotel1 from "/src/assets/kerala/Hotel1.jpg";
import Hotel2 from "/src/assets/kerala/Hotel2.jpg";
import Hotel3 from "/src/assets/kerala/Hotel3.jpg";
import Hotel4 from "/src/assets/kerala/Hotel4.jpg";
import Hotel5 from "/src/assets/kerala/Hotel5.jpg";
import Hotel6 from "/src/assets/kerala/Hotel6.jpg";
import Hotel7 from "/src/assets/kerala/Hotel7.jpg";
import Hotel8 from "/src/assets/kerala/Hotel8.jpg";
import Hotel9 from "/src/assets/kerala/Hotel9.jpg";
import Hotel10 from "/src/assets/kerala/Hotel10.jpg";
import Hotel11 from "/src/assets/kerala/Hotel11.jpg";
import Hotel12 from "/src/assets/kerala/Hotel12.jpg";
import Hotel13 from "/src/assets/kerala/Hotel13.jpg";
import Hotel14 from "/src/assets/kerala/Hotel14.jpg";
import Hotel15 from "/src/assets/kerala/Hotel15.jpg";
import Footer from "/src/components/footer/Footer.jsx";

function Kerala() {
  return (
    <>
      <ServiceNavbar />

      <div className="hotelBookingCard">
      <HotelBooking
  image={Hotel1}
  heading="Luxury Stay at Taj Bekal Resort & Spa, Kerala - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel2}
  heading="Convenient Stay at Courtyard by Marriott Kochi Airport - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Air-conditioned",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel3}
  heading="Relaxing Retreat at The LaLiT Resort & Spa Bekal - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel4}
  heading="Comfortable Stay at Holiday Inn Cochin, an IHG Hotel - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Paid breakfast",
    "Free parking",
    "Accessible",
    "Outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel5}
  heading="Tranquil Escape at Eden Woods Resorts & Spa - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Indoor and outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel6}
  heading="Scenic Stay at The Raviz Kadavu - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Outdoor pool",
   "More..."
  ]}
/>

<HotelBooking
  image={Hotel7}
  heading="Idyllic Retreat at Flora Misty Falls, Athirappilly - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel8}
  heading="Serene Stay at GReaT trails Wayanad by GRT Hotels - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel9}
  heading="Cozy Retreat at The Quilon Beach Hotel & Convention Centre - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel10}
  heading="Tranquil Stay at The Raviz Calicut - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel11}
  heading="Nature Retreat at Amritara Shalimar Spice Garden Resort & Spa - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel12}
  heading="Mountain Escape at Mountain Shadows Resort - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Indoor and outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel13}
  heading="Breathtaking Views at B'Canti Boutique Beach Resort Varkala - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Outdoor pool",
    "Air-conditioned",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel14}
  heading="Tranquil Retreat at Morickap Resort - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Paid breakfast",
    "Free parking",
    "Accessible",
    "Indoor and outdoor pool",
    "More..."
  ]}
/>

<HotelBooking
  image={Hotel15}
  heading="Luxury Coastal Stay at The Zuri - 4N"
  stay="Rs. 38750 Per Night"
  li={[
    "Free Wi-Fi",
    "Free breakfast",
    "Free parking",
    "Accessible",
    "Outdoor pool",
    "More..."
  ]}
/>

      </div>

      <Footer />
    </>
  );
}

export default Kerala;

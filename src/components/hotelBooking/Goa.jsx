import ServiceNavbar from "/src/components/navbar/ServiceNavbar.jsx";

import HotelBooking from "./HotelBooking";
import Hotel1 from "/src/assets/goa/Hotel1.jpg";
import Hotel2 from "/src/assets/goa/Hotel2.jpg";
import Hotel3 from "/src/assets/goa/Hotel3.jpg";
import Hotel4 from "/src/assets/goa/Hotel4.jpg";
import Hotel5 from "/src/assets/goa/Hotel5.jpg";
import Hotel6 from "/src/assets/goa/Hotel6.jpg";
import Hotel7 from "/src/assets/goa/Hotel7.jpg";
import Hotel8 from "/src/assets/goa/Hotel8.jpg";
import Hotel9 from "/src/assets/goa/Hotel9.jpg";
import Hotel10 from "/src/assets/goa/Hotel10.jpg";
import Hotel11 from "/src/assets/goa/Hotel11.jpg";
import Hotel12 from "/src/assets/goa/Hotel12.jpg";
import Hotel13 from "/src/assets/goa/Hotel13.jpg";
import Hotel14 from "/src/assets/goa/Hotel14.jpg";
import Hotel15 from "/src/assets/goa/Hotel15.jpg";
import Footer from "/src/components/footer/Footer.jsx";

function Goa() {
  return (
    <>
      <ServiceNavbar />

      <div className="hotelBookingCard">
        <HotelBooking
          image={Hotel1}
          heading="Taj Cidade de Goa Horizon Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Accessible",
            "Outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel2}
          heading="Radisson Blu Resort Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Paid breakfast",
            "Free parking",
            "Accessible",
            "Outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel3}
          heading="ITC a Luxury Collection Resort"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Accessible",
            "Air-conditioned",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel4}
          heading="Isprava Estate in Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Guest Relationship Manager",
            "Concierge Service",
            "Permanent Cleaning Staff",
            "Electrician",
            "Plumber",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel5}
          heading="Antarim Resort"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Paid breakfast",
            "Free parking",
            "Accessible",
            "Plumber",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel6}
          heading="Caravela Beach Resort Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Accessible",
            "Electrician",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel7}
          heading="Holiday Inn Goa Candolim"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Paid breakfast",
            "Free parking",
            "Accessible",
            "Outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel8}
          heading="Kenilworth Resort & Spa, Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Accessible",
            "Outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel9}
          heading="Hyatt Centric Candolim Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Paid breakfast",
            "Free parking",
            "Accessible",
            "Outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel10}
          heading="Grand Hyatt Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Paid breakfast",
            "Free parking",
            "Accessible",
            "Indoor and outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel11}
          heading="The Zuri White Sands Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Accessible",
            "Outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel12}
          heading="DoubleTree by Hilton Arpora Baga"
          stay="Rs. 38750 Per Night"
          li={[
            "Paid Wi-Fi",
            "Paid breakfast",
            "Free parking",
            "Accessible",
            "Outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel13}
          heading="ITC Hotels Shanti Morada"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Accessible",
            "Outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel14}
          heading="Heritage Village Resort & Spa Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Accessible",
            "Outdoor pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel15}
          heading="Isprava Estate in Goa"
          stay="Rs. 38750 Per Night"
          li={[
            "Guest Relationship Manager",
            "Concierge Service",
            "Permanent Cleaning Staff",
            "Electrician",
            "Plumber",
            "More...",
          ]}
        />
      </div>

      <Footer />
    </>
  );
}

export default Goa;

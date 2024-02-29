import ServiceNavbar from "/src/components/navbar/ServiceNavbar.jsx";

import HotelBooking from "./HotelBooking";
import Hotel1 from "/src/assets/shimla/Hotel1.jpg";
import Hotel2 from "/src/assets/shimla/Hotel2.jpg";
import Hotel3 from "/src/assets/shimla/Hotel3.jpg";
import Hotel4 from "/src/assets/shimla/Hotel4.jpg";
import Hotel5 from "/src/assets/shimla/Hotel5.jpg";
import Hotel6 from "/src/assets/shimla/Hotel6.jpg";
import Hotel7 from "/src/assets/shimla/Hotel7.jpg";
import Hotel8 from "/src/assets/shimla/Hotel8.jpg";
import Hotel9 from "/src/assets/shimla/Hotel9.jpg";
import Hotel10 from "/src/assets/shimla/Hotel10.jpg";
import Hotel11 from "/src/assets/shimla/Hotel11.jpg";
import Hotel12 from "/src/assets/shimla/Hotel12.jpg";
import Hotel13 from "/src/assets/shimla/Hotel13.jpg";
import Hotel14 from "/src/assets/shimla/Hotel14.jpg";
import Hotel15 from "/src/assets/shimla/Hotel15.jpg";
import Footer from "/src/components/footer/Footer.jsx";

function Shimla() {
  return (
    <>
      <ServiceNavbar />

      <div className="hotelBookingCard">
        <HotelBooking
          image={Hotel1}
          heading="The Retreat Mashobra Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Paid breakfast",
            "Free parking",
            "Accessible",
            "Air-conditioned",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel2}
          heading="Taj Theog Resort & Spa Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Accessible",
            "Indoor Pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel3}
          heading="M13 Manjit Mansion"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Indoor Pool",
            "Room service",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel4}
          heading="Pines Exotica"
          stay="Rs. 38750 Per Night"
          li={[
            "Free WiFi",
            "Free parking",
            "Room service",
            "Breakfast",
            "Indoor Pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel5}
          heading="The Zion Shimla"
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
          image={Hotel6}
          heading="Hotel Taj Palace Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Parking",
            "Pool",
            "Laundry service",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel7}
          heading="Wildflower Oberoi Resort Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Accessible",
            "Indoor Pool",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel8}
          heading="Grand White Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Breakfast",
            "Free parking",
            "Accessible",
            "Air-conditioned",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel9}
          heading="Woodvista Cottages Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Free parking",
            "Pool",
            "Laundry service",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel10}
          heading="Glen View Heritage Homestay"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free parking",
            "Accessible",
            "Pool",
            "Laundry service",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel11}
          heading="Radisson Jass Shimla"
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
          image={Hotel12}
          heading="Welcome by ITC Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Paid breakfast",
            "Free parking",
            "Accessible",
            "Air-conditioned",
            "More...",
          ]}
        />

        <HotelBooking
          image={Hotel13}
          heading="Hotel Victory Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Pool",
            "Laundry service",
            "Room service",
            "More...",
          ]}
        />
        <HotelBooking
          image={Hotel14}
          heading="Hotel Victory Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Pool",
            "Laundry service",
            "Room service",
            "More...",
          ]}
        />
        <HotelBooking
          image={Hotel15}
          heading="Hotel Victory Shimla"
          stay="Rs. 38750 Per Night"
          li={[
            "Free Wi-Fi",
            "Free breakfast",
            "Pool",
            "Laundry service",
            "Room service",
            "More...",
          ]}
        />
      </div>

      <Footer />
    </>
  );
}

export default Shimla;

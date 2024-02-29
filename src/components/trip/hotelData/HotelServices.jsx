import HotelData from "./HotelData";
import { useNavigate } from 'react-router-dom';
import Trip4 from "/src/assets/goa1.jpg";
import Trip5 from "/src/assets/shimla1.jpg";
import Trip6 from "/src/assets/kerla1.jpg";
import Footer from "/src/components/footer/Footer.jsx";
import ServiceNavbar from "/src/components/navbar/ServiceNavbar.jsx";




function HotelServices() {

    const navigate = useNavigate();

    return (
        <>

           
<ServiceNavbar />
            <div className="trip">
                
                <h1>Hotel Booking</h1>

                <div className="serviceTripCard">
                    <HotelData
                        image={Trip4}
                        heading="Trip in Goa"
                        price="Starting at Rs. 9,900 Per person (Click Me!)"
                        text="Arrive in Goa and feel the warm embrace of the coastal breeze. Check into your beachside accommodation and kick off your shoes to experience the powdery sands beneath your feet. Head to Baga Beach for a relaxed afternoon, indulge in some water sports, and savor a beachfront dinner as the sun sets over the Arabian Sea."
                        onClick={() => {
                            navigate("/goa");
                        }}
                    />

                    <HotelData
                        image={Trip5}
                        heading="Trip in Shimla"
                        price="Starting at Rs. 7,900 Per person  (Click Me!)"
                        text="Your adventure begins in Shimla, the Queen of Hills. Arrive and check into your cozy accommodation. Take a stroll on the historic Mall Road, explore the Ridge, and immerse yourself in the colonial charm of this hill station."
                        onClick={() => {
                            navigate("/shimla");
                        }}
                    />

                    <HotelData
                        image={Trip6}
                        heading="Trip in Kerala"
                        price="Starting at Rs. 29,600 Per person  (Click Me!)"
                        text="As you arrive in Kerala, the welcoming aroma of spices and the warm hospitality of the locals greet you. Check into your chosen accommodation and immerse yourself in the unique charm of this beautiful state."
                        onClick={() => {
                            navigate("/kerala");
                        }}
                    />
                     <HotelData
                        image={Trip4}
                        heading="Trip in Goa"
                        price="Starting at Rs. 9,900 Per person"
                        text="Arrive in Goa and feel the warm embrace of the coastal breeze. Check into your beachside accommodation and kick off your shoes to experience the powdery sands beneath your feet. Head to Baga Beach for a relaxed afternoon, indulge in some water sports, and savor a beachfront dinner as the sun sets over the Arabian Sea."
                       
                    />

                    <HotelData
                        image={Trip5}
                        heading="Trip in Shimla"
                        price="Starting at Rs. 7,900 Per person"
                        text="Your adventure begins in Shimla, the Queen of Hills. Arrive and check into your cozy accommodation. Take a stroll on the historic Mall Road, explore the Ridge, and immerse yourself in the colonial charm of this hill station."
                       
                    />

                    <HotelData
                        image={Trip6}
                        heading="Trip in Kerala"
                        price="Starting at Rs. 29,600 Per person"
                        text="As you arrive in Kerala, the welcoming aroma of spices and the warm hospitality of the locals greet you. Check into your chosen accommodation and immerse yourself in the unique charm of this beautiful state."
                       
                    />
                     <HotelData
                        image={Trip4}
                        heading="Trip in Goa"
                        price="Starting at Rs. 9,900 Per person"
                        text="Arrive in Goa and feel the warm embrace of the coastal breeze. Check into your beachside accommodation and kick off your shoes to experience the powdery sands beneath your feet. Head to Baga Beach for a relaxed afternoon, indulge in some water sports, and savor a beachfront dinner as the sun sets over the Arabian Sea."
                       
                    />

                    <HotelData
                        image={Trip5}
                        heading="Trip in Shimla"
                        price="Starting at Rs. 7,900 Per person"
                        text="Your adventure begins in Shimla, the Queen of Hills. Arrive and check into your cozy accommodation. Take a stroll on the historic Mall Road, explore the Ridge, and immerse yourself in the colonial charm of this hill station."
                       
                    />

                    <HotelData
                        image={Trip6}
                        heading="Trip in Kerala"
                        price="Starting at Rs. 29,600 Per person"
                        text="As you arrive in Kerala, the welcoming aroma of spices and the warm hospitality of the locals greet you. Check into your chosen accommodation and immerse yourself in the unique charm of this beautiful state."
                       
                    />
                </div>
            </div>

            <Footer />
            
        </>
    )
}

export default HotelServices;

import TravelPlanData from "/src/components/travelPlan/TravelPlanData.jsx";
import { useNavigate } from 'react-router-dom';
import Trip4 from "/src/assets/goa1.jpg";
import Trip5 from "/src/assets/shimla1.jpg";
import Trip6 from "/src/assets/kerla1.jpg";
import Footer from "/src/components/footer/Footer.jsx";
import ServiceNavbar from "/src/components/navbar/ServiceNavbar.jsx";




function TravelPlan() {

    const navigate = useNavigate();

    return (
        <>

           
<ServiceNavbar />
            <div className="travelPlan">
                
                <h1>Tour Packages</h1>

                <div className="serviceTripCard">
                    <TravelPlanData
                        image={Trip4}
                        heading="Goa"
                        text="Starting From"
                        price="Rs. 10,998"
                        onClick={() => {
                            navigate("/goaTravelPlan");
                        }}
                    />

                    <TravelPlanData
                        image={Trip5}
                        heading="Shimla"
                        text="Starting From"
                        price="Rs. 12,099"
                        onClick={() => {
                            navigate("/shimlaTravelPlan");
                        }}
                    />

                    <TravelPlanData
                        image={Trip6}
                        heading="Kerala"
                        text="Starting From"
                        price="Rs. 11,099"
                        onClick={() => {
                            navigate("/keralaTravelPlan");
                        }}
                    />
                      <TravelPlanData
                        image={Trip4}
                        heading="Goa"
                        text="Starting From"
                        price="Rs. 10,998"
                        onClick={() => {
                            navigate("/goaTravelPlan");
                        }}
                    />

                    <TravelPlanData
                        image={Trip5}
                        heading="Shimla"
                        text="Starting From"
                        price="Rs. 12,099"
                        onClick={() => {
                            navigate("/shimla");
                        }}
                    />

                    <TravelPlanData
                        image={Trip6}
                        heading="Kerala"
                        text="Starting From"
                        price="Rs. 11,099"
                        onClick={() => {
                            navigate("/kerala");
                        }}
                    />
                     
                </div>
            </div>

            <Footer />
            
        </>
    )
}

export default TravelPlan;

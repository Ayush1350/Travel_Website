import ServiceNavbar from "/src/components/navbar/ServiceNavbar.jsx";

import PackagesPlanData from "../PackagesPlanData";

import GoaPackage1 from "/src/assets/goaPackages/GoaPackage1.jpg";
import GoaPackage2 from "/src/assets/goaPackages/GoaPackage2.jpg";
import GoaPackage3 from "/src/assets/goaPackages/GoaPackage3.jpg";
import GoaPackage4 from "/src/assets/goaPackages/GoaPackage4.jpg";
import GoaPackage5 from "/src/assets/goaPackages/GoaPackage5.jpg";
import GoaPackage6 from "/src/assets/goaPackages/GoaPackage6.jpg";

import Footer from "/src/components/footer/Footer.jsx";

function GoaTravelPlan() {
  return (
    <>
      <ServiceNavbar />

      <div className="packagesPlan">
        
        <PackagesPlanData
          image={GoaPackage1}
          heading="Taj Cidade de Goa Horizon Goa"
          stay="03 Nights and 04 Days Goa "
            li={[
            <span key="hotel"><i className="fa-solid fa-hotel"></i> Hotel</span>,
            <span key="binoculars"><i className="fa-solid fa-binoculars"></i> Sightseeing</span>,
            <span key="car"><i className="fa-solid fa-car-side"></i> Transportation</span>,
            <span key="utensils"><i className="fa-solid fa-utensils"></i> Meals</span>,
            <span key="plane"><i className="fa-solid fa-plane-departure"></i> Flight</span>
        ]}
        price="Rs. 47,999"
        />

<PackagesPlanData
          image={GoaPackage2}
          heading="Taj Cidade de Goa Horizon Goa"
          stay="03 Nights and 04 Days Goa "
            li={[
            <span key="hotel"><i className="fa-solid fa-hotel"></i> Hotel</span>,
            <span key="binoculars"><i className="fa-solid fa-binoculars"></i> Sightseeing</span>,
            <span key="car"><i className="fa-solid fa-car-side"></i> Transportation</span>,
            <span key="utensils"><i className="fa-solid fa-utensils"></i> Meals</span>,
            <span key="plane"><i className="fa-solid fa-plane-departure"></i> Flight</span>
        ]}
        price="Rs. 14,999"
        />

<PackagesPlanData
          image={GoaPackage3}
          heading="Taj Cidade de Goa Horizon Goa"
          stay="03 Nights and 04 Days Goa "
            li={[
            <span key="hotel"><i className="fa-solid fa-hotel"></i> Hotel</span>,
            <span key="binoculars"><i className="fa-solid fa-binoculars"></i> Sightseeing</span>,
            <span key="car"><i className="fa-solid fa-car-side"></i> Transportation</span>,
            <span key="utensils"><i className="fa-solid fa-utensils"></i> Meals</span>,
            <span key="plane"><i className="fa-solid fa-plane-departure"></i> Flight</span>
        ]}
        price="Rs. 15,599"
        />

<PackagesPlanData
          image={GoaPackage4}
          heading="Taj Cidade de Goa Horizon Goa"
          stay="03 Nights and 04 Days Goa "
            li={[
            <span key="hotel"><i className="fa-solid fa-hotel"></i> Hotel</span>,
            <span key="binoculars"><i className="fa-solid fa-binoculars"></i> Sightseeing</span>,
            <span key="car"><i className="fa-solid fa-car-side"></i> Transportation</span>,
            <span key="utensils"><i className="fa-solid fa-utensils"></i> Meals</span>,
            <span key="plane"><i className="fa-solid fa-plane-departure"></i> Flight</span>
        ]}
        price="Rs. 43,399"
        />

<PackagesPlanData
          image={GoaPackage5}
          heading="Taj Cidade de Goa Horizon Goa"
          stay="03 Nights and 04 Days Goa "
            li={[
            <span key="hotel"><i className="fa-solid fa-hotel"></i> Hotel</span>,
            <span key="binoculars"><i className="fa-solid fa-binoculars"></i> Sightseeing</span>,
            <span key="car"><i className="fa-solid fa-car-side"></i> Transportation</span>,
            <span key="utensils"><i className="fa-solid fa-utensils"></i> Meals</span>,
            <span key="plane"><i className="fa-solid fa-plane-departure"></i> Flight</span>
        ]}
        price="Rs. 30,399"
        />

<PackagesPlanData
          image={GoaPackage6}
          heading="Taj Cidade de Goa Horizon Goa"
          stay="03 Nights and 04 Days Goa "
            li={[
            <span key="hotel"><i className="fa-solid fa-hotel"></i> Hotel</span>,
            <span key="binoculars"><i className="fa-solid fa-binoculars"></i> Sightseeing</span>,
            <span key="car"><i className="fa-solid fa-car-side"></i> Transportation</span>,
            <span key="utensils"><i className="fa-solid fa-utensils"></i> Meals</span>,
            <span key="plane"><i className="fa-solid fa-plane-departure"></i> Flight</span>
        ]}
        price="Rs. 11,599"
        />

        
      </div>

      <Footer />
    </>
  );
}

export default GoaTravelPlan;

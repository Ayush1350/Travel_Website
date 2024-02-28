import TripData from "./TripData";
import Trip1 from "/src/assets/5.jpg";
import Trip2 from "/src/assets/6.jpg";
import Trip3 from "/src/assets/8.jpg";

function Trip() {
  return (
    <>
      <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using Google Maps.</p>

        <div className="tripcard">
          <TripData
            image={Trip1}
            heading="Trip in Malaysia"
            text="Embark on an enchanting journey to the mesmerizing archipelago of Indonesia, where each step unveils a tapestry of rich cultural heritage, lush landscapes, and vibrant traditions. Explore the ancient temples of Borobudur and Prambanan, marvel at the stunning beaches of Bali, and traverse the dense jungles of Borneo. Engage in the warm hospitality of locals, savor exotic culinary delights, and discover the unique blend of modernity and tradition that defines Indonesia."
          />

          <TripData
            image={Trip2}
            heading="Trip in Indonesia"
            text="Discover the iconic Petronas Towers in the heart of Kuala Lumpur, a symbol of the nation's progress, and explore the bustling street markets of Penang, where the aroma of diverse cuisines fills the air. Immerse yourself in the lush greenery of the Cameron Highlands, where tea plantations stretch as far as the eye can see, and witness the awe-inspiring biodiversity of Borneo's rainforests."
          />

          <TripData
            image={Trip3}
            heading="Trip in France"
            text=" Begin your adventure in the romantic city of Paris, where iconic landmarks like the Eiffel Tower and Louvre Museum await. Traverse the vineyard-covered regions of Bordeaux and Burgundy, indulging in exquisite wines and gourmet cuisine. Explore the historic châteaux of the Loire Valley, witness the breathtaking beauty of the French Riviera, and wander through the charming villages of Provence."
          />
        </div>
        
      </div>
    </>
  );
}

export default Trip;

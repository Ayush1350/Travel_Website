import "../destination/Destination.css";
import DestinationData from "./DestinationData";
import Mountain1 from "/src/assets/1.jpg";
import Mountain2 from "/src/assets/2.jpg";
import Mountain5 from "/src/assets/5.jpg";
import Mountain8 from "/src/assets/8.jpg";

function Destination() {
  return (
    <>
      <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>
      </div>

      <DestinationData
      className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal Volcano is an active stratovolcano situated on Luzon Island,
        approximately 50 kilometers south of Manila. What makes Taal Volcano
        unique is its location within Taal Lake, forming an island within a
        lake, within an island—a geological phenomenon known as a nested
        caldera. This intricate structure has earned Taal the distinction of
        being one of the world's smallest active volcanoes."
        img1={Mountain1}
        img2={Mountain2}
      />

      <DestinationData
      className="first-des-reverse"
        heading="Mt.Daguldul,Batangas"
        text="Nestled in the scenic province of Batangas, Mt. Daguldul stands as a captivating destination for adventure seekers and nature enthusiasts. This majestic mountain offers a trekking experience like no other, featuring lush greenery, picturesque landscapes, and a trail that unveils the beauty of Batangas.
        As you ascend the slopes of Mt. Daguldul, you'll be treated to breathtaking panoramic views of the surrounding areas. The trek is not only a physical journey but a visual feast, with every step revealing the diverse flora and fauna that call this mountain home."
        img1={Mountain5}
        img2={Mountain8}
      />
    </>
  );
}

export default Destination;

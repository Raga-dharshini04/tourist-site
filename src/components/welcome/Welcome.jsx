import "./Welcome.css";
import BounceCards from "../BounceCard/BounceCard";

import pondi from "../../assets/images/pondi.png";
import kerala from "../../assets/images/kerala.png";
import TN from "../../assets/images/TN.png";
import kashmir from "../../assets/images/kashmir.png";
import goa from "../../assets/images/goa.png";

function Welcome() {
  const images = [
    pondi,
    kashmir,
    kerala,
    TN,
    goa,
  ];

  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)",
  ];

  return (
    <section className="welcome" id="home">
      {/* Left Content */}
      <div className="content">
        <span className="tag">🇮🇳 Incredible India Tourism</span>

        <h1>
          DISCOVER <br />
          INCREDIBLE <br />
          <span>INDIA</span>
        </h1>

        <p>
          Explore ancient temples, peaceful beaches, misty mountains,
          wildlife, and unforgettable cultural journeys across India.
        </p>

        <div className="wel-buttons">
          <button className="explore-btn">Explore Destination</button>
          <button className="trip-btn">Plan Your Trip</button>
        </div>
      </div>

      {/* Right Images */}
      <div className="wel-images">
        <BounceCards
          images={images}
          containerWidth={500}
          containerHeight={300}
          animationDelay={1}
          animationStagger={0.08}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
      </div>
    </section>
  );
}

export default Welcome;
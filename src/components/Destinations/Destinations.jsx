import "../Destinations/Destinations.css";

import TN from "../../assets/images/TN.png";
import kerala from "../../assets/images/kerala.png";
import goa from "../../assets/images/goa.png";
import pondi from "../../assets/images/pondi.png";
import kashmir from "../../assets/images/kashmir.png";
import { useNavigate } from "react-router-dom";

function Destinations() {

    const navigate = useNavigate();

    const places = [
        {
            image: TN,
            name: "Tamil Nadu",
            description: "Explore ancient temples, sites and rich culture.",
            route: "/tamilnadu"
        },
        {
            image: kerala,
            name: "Kerala",
            description: "Discover tea plantations and beautiful hills.",
            route: "/kerala"
        },
        {
            image: goa,
            name: "Goa",
            description: "Relax on golden beaches and enjoy vibrant nightlife.",
            route: "/goa"
        },
        {
            image: pondi,
            name: "puducherry",
            description: "French architecture and peaceful beaches.",
            route: "/pondi"
        },
        {
            image: kashmir,
            name: "Kashmir",
            description: "Witness snowy mountains and breathtaking valleys.",
            route: "/kashmir"
        }
    ];

    return (
        <section className="destination" id="destinations">
            <div className="destination-title">
                <h2>POPULAR DESTINATION</h2>
                <p>Choose your next unforgettable journey.</p>
            </div>

            <div className="destination-container">

                {places.map((place, index) => (
                    <div className="destination-card" key={index} onClick={() => navigate(place.route)}>

                        <img src={place.image} alt={place.name} />
                        <h3>{place.name}</h3>
                        <p>{place.description}</p>
                        <button>Explore</button>
                    </div>

                ))}
            </div>
        </section>
    );
}

export default Destinations;
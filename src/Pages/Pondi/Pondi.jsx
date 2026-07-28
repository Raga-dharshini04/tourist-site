import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import prom from '../../assets/images/promenade.jpg';
import paradise from '../../assets/images/paradise.jpg';
import auro from '../../assets/images/auro.jpg';
import ashram from '../../assets/images/ashram.jpg';
import french from '../../assets/images/french.jpg';



import bikeRental from "../../assets/images/bike-rental.jpg";
import carRental from "../../assets/images/car-rental.jpg";

import crois from '../../assets/images/crois.jpg';
import crepes from '../../assets/images/crepes.jpg';
import sea from '../../assets/images/seafood.jpg';
import south from '../../assets/images/southin.jpg';


import "./Pondi.css";

function Pondi() {
    return (
        <>
            <Navbar />

            <main className="Pondi">

                {/* Hero Section */}
                <section className="pondi-hero">

                    <div className="hero-content">

                        <span className="hero-badge">
                            The French Riviera of the East
                        </span>

                        <h1>
                            DISCOVER <br />
                            <span>Pondi</span>
                        </h1>

                        <p>
                            Wander through charming French streets, relax on serene beaches,
                            visit peaceful spiritual centers, and experience the perfect blend
                            of French elegance and Indian culture.
                        </p>

                        <div className="hero-buttons">
                            <button className="trip-btn">
                                Plan your Trip
                            </button>
                        </div>

                    </div>

                    <div className="hero-season">
                        <h3>Best Season</h3>
                        <p>Oct – Mar</p>
                    </div>

                </section>

                {/* Dashboard */}
                <section className="pondi-dashboard">

                    <div className="dashboard-title">
                        <h2>Explore Pondi</h2>
                        <p>
                            Everything you need to plan your perfect Pondi
                            journey.
                        </p>
                    </div>

                    <div className="dashboard-grid">

                        {/* Top Attractions */}
                        <div className="dashboard-card attractions-card">

                            <h3>Top Attractions</h3>

                            <div className="attraction-grid">

                                <div className="attraction-item">
                                    <img src={prom} alt="promBeach" />

                                    <div className="attraction-content">
                                        <h4>Promenade Beach</h4>
                                        <p>Scenic seaside perfect for sunrise.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.8</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={paradise} alt="paradiseBeach" />

                                    <div className="attraction-content">
                                        <h4>Paradise Beach</h4>
                                        <p>Crystal-clear beach accessible by boat.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.9</span>
                                            <span>1 Day</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={auro} alt="auro" />

                                    <div className="attraction-content">
                                        <h4>Auroville</h4>
                                        <p>International township for peace.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.7</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={ashram} alt="temple" />

                                    <div className="attraction-content">
                                        <h4>Sri Aurobindo Ashram</h4>
                                        <p>Spiritual retreat offering meditation.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.6</span>
                                            <span>1 Day</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Hotels */}

                        <div className="dashboard-card hotels-card">

                            <h3>Hotels & Stay</h3>

                            <div className="hotel-grid">

                                {/* Hotel 1 */}
                                <div className="hotel-item">
                                    <img src={prom} alt="south Resort" />

                                    <div className="hotel-content">
                                        <h4>Ocean View Residency</h4>
                                        <p>Comfortable sea-view stay close to popular attractions.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹8,500 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 2 */}
                                <div className="hotel-item">
                                    <img src={french} alt="sea" />

                                    <div className="hotel-content">
                                        <h4>Le French Heritage Hotel</h4>
                                        <p>Elegant colonial-style hotel in the French Quarter.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹6,200 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 3 */}
                                <div className="hotel-item">
                                    <img src={paradise} alt="palms Hotel" />

                                    <div className="hotel-content">
                                        <h4>Paradise Beach Resort</h4>
                                        <p>Beachside resort with modern comforts.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.7</span>
                                            <span>₹5,400 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 4 */}
                                <div className="hotel-item">
                                    <img src={prom} alt="heritage Hotel" />

                                    <div className="hotel-content">
                                        <h4>White Town Boutique Stay</h4>
                                        <p>Charming boutique hotel near Promenade Beach.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹5,500 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                            </div>

                        </div>


                        {/* Transportation */}
                        <div className="dashboard-card transport-card">

                            <h3>Transportation</h3>

                            <div className="transport-grid">

                                <div className="transport-item">
                                    <img src={bikeRental} alt="Bike Rental" />

                                    <div className="transport-content">
                                        <h4>Bike Rental</h4>

                                        <p>
                                            Explore Pondi's scenic roads on a two-wheeler.
                                            Perfect for solo travelers and couples.
                                        </p>

                                        <div className="transport-info">
                                            <span>🏍 Starting ₹500/day</span>
                                            <span>Helmet Included</span>
                                        </div>

                                        <button>Rent Bike</button>
                                    </div>
                                </div>

                                <div className="transport-item">
                                    <img src={carRental} alt="Car Rental" />

                                    <div className="transport-content">
                                        <h4>Car Rental</h4>

                                        <p>
                                            Comfortable self-drive and chauffeur-driven cars
                                            for family trips across Pondi.
                                        </p>

                                        <div className="transport-info">
                                            <span>🚗 Starting ₹2,000/day</span>
                                            <span>Unlimited KM*</span>
                                        </div>

                                        <button>Rent Car</button>
                                    </div>
                                </div>

                            </div>

                        </div>

                        {/* Foods */}

                        <div className="dashboard-card foods-card">

                            <h3>Must Try</h3>

                            <div className="food-grid">

                                <div className="food-item">
                                    <img src={crois} alt="Dosa" />

                                    <div className="food-content">
                                        <h4>French Croissant</h4>

                                        <div className="food-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹50+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={crepes} alt="chettinad" />

                                    <div className="food-content">
                                        <h4>Crepes</h4>


                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹180+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={sea} alt="idli" />

                                    <div className="food-content">
                                        <h4>Seafood Platter</h4>


                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹50+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={south} alt="jigar" />

                                    <div className="food-content">
                                        <h4>South Indian Thali</h4>


                                        <div className="food-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹30+</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>

                </section>

            </main>

            <Footer />
        </>
    );
}

export default Pondi;
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import bagaBeach from '../../assets/images/baga-beach.jpg';
import calBeach from '../../assets/images/cal-beach.jpg';
import fort from '../../assets/images/fort.jpg';
import jesus from '../../assets/images/jesus.jpg';
import waterfall from '../../assets/images/waterfall.jpg';

import south from '../../assets/images/south.jpg';
import sea from '../../assets/images/sea.jpg';
import palms from '../../assets/images/palms.jpg';
import heritage from '../../assets/images/heritage.jpg';

import bikeRental from "../../assets/images/bike-rental.jpg";
import carRental from "../../assets/images/car-rental.jpg";

import guan from '../../assets/images/guan.jpg';
import parwn from '../../assets/images/prawn.jpg';
import pork from '../../assets/images/pork.jpg';
import bebina from '../../assets/images/bebina.jpg';

import "./Goa.css";

function Goa() {
    return (
        <>
            <Navbar />

            <main className="Goa">

                {/* Hero Section */}
                <section className="goa-hero">

                    <div className="hero-content">

                        <span className="hero-badge">
                            Pearl of the Orient
                        </span>

                        <h1>
                            DISCOVER <br />
                            <span>Goa</span>
                        </h1>

                        <p>
                            Discover sun-kissed beaches, Portuguese heritage,
                            vibrant nightlife, thrilling water sports, and delicious
                            seafood in India's favorite coastal paradise.
                        </p>

                        <div className="hero-buttons">
                            <button className="trip-btn">
                                Plan your Trip
                            </button>
                        </div>

                    </div>

                    <div className="hero-season">
                        <h3>Best Season</h3>
                        <p>Nov – Feb</p>
                    </div>

                </section>

                {/* Dashboard */}
                <section className="goa-dashboard">

                    <div className="dashboard-title">
                        <h2>Explore Goa</h2>
                        <p>
                            Everything you need to plan your perfect TamilNadu
                            journey.
                        </p>
                    </div>

                    <div className="dashboard-grid">

                        {/* Top Attractions */}
                        <div className="dashboard-card attractions-card">

                            <h3>Top Attractions</h3>

                            <div className="attraction-grid">

                                <div className="attraction-item">
                                    <img src={bagaBeach} alt="BagaBeach" />

                                    <div className="attraction-content">
                                        <h4>Baga Beach</h4>
                                        <p>Famous for nightlife, beach shacks and water sports.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.8</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={calBeach} alt="CalBeach" />

                                    <div className="attraction-content">
                                        <h4>Calangute Beach</h4>
                                        <p>Goa's largest and most popular beach.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.9</span>
                                            <span>1 Day</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={waterfall} alt="fort" />

                                    <div className="attraction-content">
                                        <h4>Dudhsagar Falls</h4>
                                        <p>Spectacular four-tier waterfall surrounded by forests.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.7</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={jesus} alt="temple" />

                                    <div className="attraction-content">
                                        <h4>Basilica of Bom Jesus</h4>
                                        <p>UNESCO World Heritage Portuguese church.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.6</span>
                                            <span>1 Day</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="attraction-item">
                                    <img src={fort} alt="waterfall" />

                                    <div className="attraction-content">
                                        <h4>Fort Aguada</h4>
                                        <p>Historic fort offering breathtaking Arabian Sea views.</p>

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
                                    <img src={south} alt="south Resort" />

                                    <div className="hotel-content">
                                        <h4>South Goa Luxury Retreat</h4>
                                        <p>Peaceful resort surrounded by coconut trees.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹8,500 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 2 */}
                                <div className="hotel-item">
                                    <img src={sea} alt="sea" />

                                    <div className="hotel-content">
                                        <h4>Sea View Beach Resort</h4>
                                        <p>Luxury beachfront resort near Baga Beach.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹6,200 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 3 */}
                                <div className="hotel-item">
                                    <img src={palms} alt="palms Hotel" />

                                    <div className="hotel-content">
                                        <h4>Calangute Palm Resort</h4>
                                        <p>Modern resort with swimming pool and beach access.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.7</span>
                                            <span>₹5,400 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 4 */}
                                <div className="hotel-item">
                                    <img src={heritage} alt="heritage Hotel" />

                                    <div className="hotel-content">
                                        <h4>Heritage Portuguese Villa</h4>
                                        <p>Traditional Portuguese-style villa in Old Goa.</p>

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
                                            Explore Goa's scenic roads on a two-wheeler.
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
                                            for family trips across Goa.
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
                                    <img src={guan} alt="Dosa" />

                                    <div className="food-content">
                                        <h4>Goan Fish Curry</h4>

                                        <div className="food-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹50+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={parwn} alt="chettinad" />

                                    <div className="food-content">
                                        <h4>Prawn Balchão</h4>


                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹180+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={pork} alt="idli" />

                                    <div className="food-content">
                                        <h4>Pork Vindaloo</h4>


                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹50+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={bebina} alt="jigar" />

                                    <div className="food-content">
                                        <h4>Bebinca</h4>


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

export default Goa;
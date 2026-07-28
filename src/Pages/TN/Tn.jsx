import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import ooty from '../../assets/images/ooty.jpg';
import kodaikanal from '../../assets/images/kodaikanal.jpg';
import maha from '../../assets/images/maha.jpg';
import temple from '../../assets/images/temple.jpg';
import palam from '../../assets/images/ram-setu.jpg';

import ootyResort from '../../assets/images/ooty-resort.jpg';
import kodaiResort from '../../assets/images/kodaikanal-resort.jpg';
import mahaResort from '../../assets/images/maha-resort.jpg';
import MaduraiResort from '../../assets/images/madurai-resort.jpg';

import bikeRental from "../../assets/images/bike-rental.jpg";
import carRental from "../../assets/images/car-rental.jpg";

import dosa from '../../assets/images/dosa.jpg';
import chettinad from '../../assets/images/chettinad.jpg';
import idliVada from '../../assets/images/idli-vada.jpg';
import jigar from '../../assets/images/jigarthanda.jpg';

import "./Tn.css";

function Tn() {
    return (
        <>
            <Navbar />

            <main className="TN">

                {/* Hero Section */}
                <section className="TN-hero">

                    <div className="hero-content">

                        <span className="hero-badge">
                            Land of Temples
                        </span>

                        <h1>
                            DISCOVER <br />
                            <span>Tamil Nadu</span>
                        </h1>

                        <p>
                            Explore magnificent temples, scenic hill stations,
                            golden beaches, vibrant culture, and authentic South Indian
                            cuisine across the timeless beauty of Tamil Nadu.
                        </p>

                        <div className="hero-buttons">
                            <button className="trip-btn">
                                Plan your Trip
                            </button>
                        </div>

                    </div>

                    <div className="hero-season">
                        <h3>Best Season</h3>
                        <p>Dec – March</p>
                    </div>

                </section>

                {/* Dashboard */}
                <section className="TN-dashboard">

                    <div className="dashboard-title">
                        <h2>Explore Tamil Nadu</h2>
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
                                    <img src={ooty} alt="Ooty" />

                                    <div className="attraction-content">
                                        <h4>Ooty</h4>
                                        <p>Tea plantations & misty hills.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.8</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={kodaikanal} alt="kodaikanal" />

                                    <div className="attraction-content">
                                        <h4>Kodaikanal</h4>
                                        <p>Famous houseboats & backwaters.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.9</span>
                                            <span>1 Day</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={maha} alt="mahabalipuram" />

                                    <div className="attraction-content">
                                        <h4>Mahabalipuram</h4>
                                        <p>Waterfalls & wildlife adventures.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.7</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={temple} alt="temple" />

                                    <div className="attraction-content">
                                        <h4>Meenakshi temple</h4>
                                        <p>Periyar Wildlife Sanctuary.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.6</span>
                                            <span>1 Day</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="attraction-item">
                                    <img src={palam} alt="ram-setu" />

                                    <div className="attraction-content">
                                        <h4>Ram-setu</h4>
                                        <p>Periyar Wildlife Sanctuary.</p>

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
                                    <img src={ootyResort} alt="Ooty Resort" />

                                    <div className="hotel-content">
                                        <h4>Ooty Resort</h4>
                                        <p>Luxury stay surrounded by tea plantations and misty hills.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹8,500 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 2 */}
                                <div className="hotel-item">
                                    <img src={kodaiResort} alt="kodaikanal" />

                                    <div className="hotel-content">
                                        <h4>Kodaikanal resort</h4>
                                        <p>Experience Kerala backwaters with a private houseboat stay.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹6,200 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 3 */}
                                <div className="hotel-item">
                                    <img src={mahaResort} alt="Kochi Hotel" />

                                    <div className="hotel-content">
                                        <h4>Mahabalippuram beach resort</h4>
                                        <p>Elegant heritage rooms near Fort Kochi attractions and cafes.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.7</span>
                                            <span>₹5,400 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 4 */}
                                <div className="hotel-item">
                                    <img src={MaduraiResort} alt="Kochi Hotel" />

                                    <div className="hotel-content">
                                        <h4>Madurai Heritage</h4>
                                        <p>Elegant heritage rooms near Fort kovalam attractions and cafes.</p>

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
                                            Explore tamilnadu's scenic roads on a two-wheeler.
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
                                            for family trips across tamil nadu.
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
                                    <img src={dosa} alt="Dosa" />

                                    <div className="food-content">
                                        <h4>Dosa</h4>

                                        <div className="food-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹50+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={chettinad} alt="chettinad" />

                                    <div className="food-content">
                                        <h4>Chettinad Chicken</h4>
                                        

                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹180+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={idliVada} alt="idli" />

                                    <div className="food-content">
                                        <h4>Idli vada</h4>
                                        

                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹50+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={jigar} alt="jigar" />

                                    <div className="food-content">
                                        <h4>Jigarthanda</h4>
                                        

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

export default Tn;
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import gulmarg from '../../assets/images/gulmarg.jpg';
import srinagar from '../../assets/images/srinagar.jpg';
import pahalgam from '../../assets/images/pahal.jpg';
import sonamarg from '../../assets/images/sonamarg.jpg';

import bikeRental from "../../assets/images/bike-rental.jpg";
import carRental from "../../assets/images/car-rental.jpg";

import rogan from '../../assets/images/rogan.jpg';
import dum from '../../assets/images/DumAloo.jpg';
import ghustaba from '../../assets/images/gushtaba.png';
import kahwa from '../../assets/images/kahwa.jpg';

import "./Kashmir.css";

function Kashmir() {
    return (
        <>
            <Navbar />

            <main className="kash">

                {/* Hero Section */}
                <section className="kash-hero">

                    <div className="hero-content">

                        <span className="hero-badge">
                            Paradise on Earth
                        </span>
                        
                        Dharani@2011
                        <h1>
                            DISCOVER <br />
                            <span>Kashmir</span>
                        </h1>

                        <p>
                            Experience snow-covered mountains, crystal-clear lakes,
                            lush valleys, colorful gardens, and unforgettable adventures
                            in the breathtaking beauty of Kashmir.
                        </p>

                        <div className="hero-buttons">
                            <button className="trip-btn">
                                Plan your Trip
                            </button>
                        </div>

                    </div>

                    <div className="hero-season">
                        <h3>Best Season</h3>
                        <p>Mar - Oct</p>
                    </div>

                </section>

                {/* Dashboard */}
                <section className="kash-dashboard">

                    <div className="dashboard-title">
                        <h2>Explore Kashmir</h2>
                        <p>
                            Everything you need to plan your perfect Kashmir
                            journey.
                        </p>
                    </div>

                    <div className="dashboard-grid">

                        {/* Top Attractions */}
                        <div className="dashboard-card attractions-card">

                            <h3>Top Attractions</h3>

                            <div className="attraction-grid">

                                <div className="attraction-item">
                                    <img src={gulmarg} alt="promBeach" />

                                    <div className="attraction-content">
                                        <h4>Gulmarg</h4>
                                        <p>Snow paradise famous for skiing and the Gondola ride.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.8</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={srinagar} alt="paradiseBeach" />

                                    <div className="attraction-content">
                                        <h4>Srinagar</h4>
                                        <p>Dal Lake, Mughal Gardens and beautiful houseboats.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.9</span>
                                            <span>1 Day</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={pahalgam} alt="auro" />

                                    <div className="attraction-content">
                                        <h4>Pahalgam</h4>
                                        <p>Scenic valley surrounded by pine forests and rivers.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.7</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={sonamarg} alt="temple" />

                                    <div className="attraction-content">
                                        <h4>Sonamarg</h4>
                                        <p>Stunning meadows and glacier viewpoints.</p>

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
                                    <img src={sonamarg} alt="south Resort" />

                                    <div className="hotel-content">
                                        <h4>Dal Lake Houseboat</h4>
                                        <p>Luxury floating houseboat with mountain views.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹8,500 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 2 */}
                                <div className="hotel-item">
                                    <img src={gulmarg} alt="sea" />

                                    <div className="hotel-content">
                                        <h4>Gulmarg Snow Resort</h4>
                                        <p>Premium resort close to the Gondola.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹6,200 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 3 */}
                                <div className="hotel-item">
                                    <img src={pahalgam} alt="palms Hotel" />

                                    <div className="hotel-content">
                                        <h4>Pahalgam Valley Resort</h4>
                                        <p>Peaceful stay surrounded by pine forests.</p>

                                        <div className="hotel-info">
                                            <span>⭐ 4.7</span>
                                            <span>₹5,400 / night</span>
                                        </div>

                                        <button>Book Now</button>
                                    </div>
                                </div>

                                {/* Hotel 4 */}
                                <div className="hotel-item">
                                    <img src={srinagar} alt="heritage Hotel" />

                                    <div className="hotel-content">
                                        <h4>Srinagar Heritage Hotel</h4>
                                        <p>Traditional Kashmiri hospitality near Dal Lake.</p>

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
                                            Explore Kashmir's scenic roads on a two-wheeler.
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
                                            for family trips across Kashmir.
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
                                    <img src={rogan} alt="Dosa" />

                                    <div className="food-content">
                                        <h4>Rogan Josh</h4>

                                        <div className="food-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹50+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={dum} alt="chettinad" />

                                    <div className="food-content">
                                        <h4>Kashmiri Dum Aloo</h4>


                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹180+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={ghustaba} alt="idli" />

                                    <div className="food-content">
                                        <h4>Gushtaba</h4>


                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹50+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={kahwa} alt="jigar" />

                                    <div className="food-content">
                                        <h4>Kahwa</h4>


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

export default Kashmir;
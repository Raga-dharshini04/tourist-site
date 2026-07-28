import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import munnar from "../../assets/images/munnar.jpg";
import allepey from "../../assets/images/allepey.jpg";
import wayand from "../../assets/images/wayand.jpg";
import thekkady from "../../assets/images/thekkady.jpg";
import kovalam from '../../assets/images/kovalam.jpg';


import munnarResort from '../../assets/images/munnar-resort.jpg';
import alleppeyHouseboat from '../../assets/images/alleppey-houseboat.jpg';
import kochiHotel from '../../assets/images/kochi-hotel.jpg';
import kovalamHotel from '../../assets/images/kovalam-resort.jpg';


import bikeRental from "../../assets/images/bike-rental.jpg";
import carRental from "../../assets/images/car-rental.jpg";

import sadya from "../../assets/images/sadya.jpg";
import appam from "../../assets/images/appam.jpg";
import puttu from "../../assets/images/puttu.jpg";
import fishCurry from "../../assets/images/fish-curry.jpg";

import "./Kerala.css";

function Kerala() {
    return (
        <>
            <Navbar />

            <main className="kerala">

                {/* Hero Section */}
                <section className="kerala-hero">

                    <div className="hero-content">

                        <span className="hero-badge">
                            God's Own Country
                        </span>

                        <h1>
                            DISCOVER <br />
                            <span>Kerala</span>
                        </h1>

                        <p>
                            Experience peaceful backwaters, misty hills,
                            beautiful beaches, rich traditions, and unforgettable
                            adventures across Kerala.
                        </p>

                        <div className="hero-buttons">
                            <button className="trip-btn">
                                Plan your Trip
                            </button>
                        </div>

                    </div>

                    <div className="hero-season">
                        <h3>Best Season</h3>
                        <p>October – March</p>
                    </div>

                </section>

                {/* Dashboard */}
                <section className="kerala-dashboard">

                    <div className="dashboard-title">
                        <h2>Explore Kerala</h2>
                        <p>
                            Everything you need to plan your perfect Kerala
                            journey.
                        </p>
                    </div>

                    <div className="dashboard-grid">

                        {/* Top Attractions */}
                        <div className="dashboard-card attractions-card">

                            <h3>Top Attractions</h3>

                            <div className="attraction-grid">

                                <div className="attraction-item">
                                    <img src={munnar} alt="Munnar" />

                                    <div className="attraction-content">
                                        <h4>Munnar</h4>
                                        <p>Tea plantations & misty hills.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.8</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={allepey} alt="Alleppey" />

                                    <div className="attraction-content">
                                        <h4>Alleppey</h4>
                                        <p>Famous houseboats & backwaters.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.9</span>
                                            <span>1 Day</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={wayand} alt="Wayanad" />

                                    <div className="attraction-content">
                                        <h4>Wayanad</h4>
                                        <p>Waterfalls & wildlife adventures.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.7</span>
                                            <span>2 Days</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="attraction-item">
                                    <img src={thekkady} alt="Thekkady" />

                                    <div className="attraction-content">
                                        <h4>Thekkady</h4>
                                        <p>Periyar Wildlife Sanctuary.</p>

                                        <div className="attraction-info">
                                            <span>⭐ 4.6</span>
                                            <span>1 Day</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="attraction-item">
                                    <img src={kovalam} alt="Thekkady" />

                                    <div className="attraction-content">
                                        <h4>Kovalam</h4>
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
                                    <img src={munnarResort} alt="Munnar Resort" />

                                    <div className="hotel-content">
                                        <h4>Munnar Mountain Resort</h4>
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
                                    <img src={alleppeyHouseboat} alt="Alleppey Houseboat" />

                                    <div className="hotel-content">
                                        <h4>Alleppey Houseboat Stay</h4>
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
                                    <img src={kochiHotel} alt="Kochi Hotel" />

                                    <div className="hotel-content">
                                        <h4>Fort Kochi Heritage Hotel</h4>
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
                                    <img src={kovalamHotel} alt="Kochi Hotel" />

                                    <div className="hotel-content">
                                        <h4>Fort kovalam Heritage Hotel</h4>
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
                                            Explore Kerala's scenic roads on a two-wheeler.
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
                                            for family trips across Kerala.
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
                                    <img src={sadya} alt="Kerala Sadya" />

                                    <div className="food-content">
                                        <h4>Kerala Sadya</h4>

                                        <div className="food-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹250+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={appam} alt="Appam" />

                                    <div className="food-content">
                                        <h4>Appam & Stew</h4>
                                        

                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹180+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={puttu} alt="Puttu" />

                                    <div className="food-content">
                                        <h4>Puttu & Kadala Curry</h4>
                                        

                                        <div className="food-info">
                                            <span>⭐ 4.8</span>
                                            <span>₹150+</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="food-item">
                                    <img src={fishCurry} alt="Fish Curry" />

                                    <div className="food-content">
                                        <h4>Kerala Fish Curry</h4>
                                        

                                        <div className="food-info">
                                            <span>⭐ 4.9</span>
                                            <span>₹320+</span>
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

export default Kerala;
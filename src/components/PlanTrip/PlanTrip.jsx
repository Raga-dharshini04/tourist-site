import "./PlanTrip.css";

function PlanTrip() {
    return (
        <section className="plan-trip" id="plan">
            <div className="plan-title">
                <h2>PLAN YOUR JOURNEY</h2>
                <p>Book your dream adventure across India.</p>
            </div>

            <div className="plan-container">
                <div className="plan-info">
                    <h3>Book Your Dream Adventure</h3>
                    <p>Choose your destination and let us help you create unforgettable travel memories.</p>

                    <div className="info-box">
                        <h4>Travel Contact</h4>
                        <p>info@india.com</p>
                    </div>

                    <div className="info-box">
                        <h4>Office Hours</h4>
                        <p>09:00 AM - 05:30 PM</p>
                    </div>

                    <div className="info-box">
                        <h4>Support</h4>
                        <p>24/7 Customer Support</p>
                    </div>

                </div>

                <div className="plan-form">
                    <form>
                        <input type="text" placeholder="Full Name" />

                        <input type="email" placeholder="Email Address" />

                        <input type="text" placeholder="Destination" />

                        <div className="form-row">
                            <input type="date" />

                            <select>
                                <option>1 Person</option>
                                <option>2 People</option>
                                <option>3 People</option>
                                <option>4 People</option>
                            </select>
                        </div>

                        <textarea placeholder="Write your travel requirements..." rows="5"></textarea>

                        <button type="submit">
                            Submit
                        </button>
                    </form>

                </div>
            </div>
        </section>
    );
}

export default PlanTrip;
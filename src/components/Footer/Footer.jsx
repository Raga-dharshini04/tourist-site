import "./Footer.css";

function Footer() {
    return (
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="footer-about">
                    <h2>Discover India</h2>
                    <p>Explore India's breathtaking destinations, rich heritage, diverse cultures, and unforgettable travel experiences.</p>
                </div>
                <div className="footer-links">
                    <h3>Destinations</h3>

                    <a href="#">Tamil Nadu</a>
                    <a href="#">Kerala</a>
                    <a href="#">Goa</a>
                    <a href="#">Puducherry</a>
                    <a href="#">Kashmir</a>
                </div>

                <div className="footer-links">
                    <h3>Quick links</h3>
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/destinations">Destination</a>
                    <a href="/plan">Book Trip</a>
                </div>

                <div className="footer-contact">
                    <h3>Contact</h3>

                    <p>info@india.com</p>
                    <p>+91 xxxxx xxxxx</p>
                    <p>Chennai, Tamil Nadu.</p>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p>2026 India.</p>
            </div>
        </footer>
    );
}

export default Footer;
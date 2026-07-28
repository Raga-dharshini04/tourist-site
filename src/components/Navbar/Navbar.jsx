import '../Navbar/Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">

            <div className="logo">
                <h2>Discover India</h2>
            </div>

            <ul className="menues">
                <li><a href="#home">Home</a></li>
                <li><a href="#destinations">Destinations</a></li>
                <li><a href="#places">Visited Places</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <button
    className="trip-button"
    onClick={() =>
    document.getElementById("plan").scrollIntoView({ behavior: "smooth" })}>
        Plan Now
            </button>
        </nav>
    )
}

export default Navbar;
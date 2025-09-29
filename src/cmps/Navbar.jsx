export function Navbar({ menuOpen }) {
    return (
        <nav className="navbar">
            <ul className={`navbar-list-container ${menuOpen ? "open" : ""}`}>
                <li><a href="#about">About me</a></li>
                <li><a href="#UGC"></a>UGC</li>
                <li><a href="#Model">Model</a></li>
                <li><a href="#Services">Services</a></li>
                <li><a href="#Reviews">Reviews</a></li>
                <li><a href="#Contact">Contact</a></li>
                <li><a href="#Imprint">Imprint</a></li>
            </ul>
        </nav>
    )
}
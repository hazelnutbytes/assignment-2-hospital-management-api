import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <Link to="/login">Login</Link>{" | "}

            <Link to="/register">Register</Link>{" | "}

            <Link to="/hospitals">Hospitals</Link>{" | "}

            <Link to="/add-hospital">Add Hospital</Link>
        </nav>
    );
}

export default Navbar;

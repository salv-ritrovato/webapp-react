import { Link, NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary border-bottom">
            <div className="container">
                <Link className="navbar-brand fw-semibold" to="/"><i class="bi bi-film"></i> MyBooleanMovies</Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/movies">Movies</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/reviews">Reviews</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
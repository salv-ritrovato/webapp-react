export default function AppFooter() {
    return (
        <footer className="bg-dark text-light py-5 mt-auto">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-4">
                        <h5 className="fw-semibold mb-2"><i className="bi bi-film"></i> MyBooleanMovies</h5>
                        <p className="text-secondary small">
                            The perfect place to discover, share and discuss the best movies.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h6 className="fw-semibold mb-2 text-uppercase fs-xs booleansmall">Our Pages</h6>
                        <ul className="list-unstyled small">
                            <li><a href="/" className="text-secondary text-decoration-none">Home</a></li>
                            <li><a href="/movies" className="text-secondary text-decoration-none">Movies</a></li>
                            <li><a href="/reviews" className="text-secondary text-decoration-none">Reviews</a></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h6 className="fw-semibold mb-2 text-uppercase fs-xs booleansmall">Contacts</h6>
                        <ul className="list-unstyled small text-secondary">
                            <li>📧 info@mybooleanmovies.com</li>
                        </ul>
                    </div>

                </div>

                <hr className="border-secondary mt-4 mb-3" />

                <p className="text-secondary small text-center mb-0">
                    © 2026 MyBooleanMovies. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
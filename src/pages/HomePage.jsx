import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_BACKEND_ADDRESS + "/movies";
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setMovies(data));
    }, []);

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Movie reviews</h1>
                    <p className="col-md-8 fs-4">
                        Welcome to our movie review community! Discover, share, and discuss
                        the latest films, read honest reviews, and connect with other movie enthusiasts.
                    </p>
                </div>
            </div>

            <section>
                <div className="container">
                    <p className="movies-section">Movies</p>
                    <div className="movies-grid">
                        {movies.map(movie => (
                            <div className="movie-card" key={movie.id}>
                                <span className="movie-genrebadge">{movie.genre}</span>
                                <img src={`${import.meta.env.VITE_BACKEND_ADDRESS}/images/${movie.image}`} alt={movie.title} className="movie-image"
                                />
                                <p className="movie-title">{movie.title}</p>
                                <p className="movie-year">{movie.release_year}</p>
                                <Link to={`/movies/${movie.id}`} className="movie-details">
                                    Details <span>→</span>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
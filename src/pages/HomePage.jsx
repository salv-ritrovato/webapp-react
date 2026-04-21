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
                    <h2 className="text-muted">Movies</h2>
                    <div className="row">
                        {movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <h2>{movie.title}</h2>
                                <p>{movie.genre}</p>
                                <p>{movie.release_year}</p>
                                <Link to={`/movies/${movie.id}`}>Details</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
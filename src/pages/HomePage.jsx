import { useState, useEffect } from "react";
import { useLoader } from "../context/LoaderContext";
import { Link } from "react-router-dom";

export default function HomePage() {
    const [movies, setMovies] = useState([]);
    const { setIsLoading } = useLoader();

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_BACKEND_ADDRESS + "/movies";

        setIsLoading(true);

        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setMovies(data);
                setIsLoading(false);
            });
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
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-5 g-4">
                        {movies.map(movie => (
                            <div className="col" key={movie.id}>
                                <div className="card h-100">
                                    <span className="badge bg-secondary position-absolute m-2">{movie.genre}</span>
                                    <img
                                        src={`${import.meta.env.VITE_BACKEND_ADDRESS}/images/${movie.image}`}
                                        alt={movie.title}
                                        className="card-img-top"
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <p className="card-title fw-bold mb-1">{movie.title}</p>
                                        <p className="card-text text-muted">{movie.release_year}</p>
                                        <Link to={`/movies/${movie.id}`} className="btn btn-secondary btn-sm mt-auto">
                                            Details <span>→</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
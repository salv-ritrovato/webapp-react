import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReviewForm from '../components/ReviewForm';

export default function MovieDetail() {
    const { id } = useParams();
    const serverAddress = import.meta.env.VITE_BACKEND_ADDRESS;
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${serverAddress}/movies/${id}`)
            .then((response) => response.json())
            .then((data) => setMovie(data));

        fetch(`${serverAddress}/movies/${id}/reviews`)
            .then((response) => response.json())
            .then((data) => setReviews(data));
    }, [id]); //

    if (!movie) return <p>Page loading...</p>;

    return (
        <div className="container mt-5">
            <div className="card border-0 shadow-lg rounded-4">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`${serverAddress}/images/${movie.image}`} className="img-fluid rounded-start h-100 object-fit-cover" alt={movie.title} />
                    </div>
                    <div className="col-md-8 d-flex align-items-center">
                        <div className="card-body text-end px-5">
                            <h1 className="card-title fw-bold mb-4">{movie.title}</h1>
                            <hr className="ms-auto w-25" />
                            <p className="mb-2 text-muted"><strong className="text-dark">Director:</strong> {movie.director}</p>
                            <p className="mb-2 text-muted"><strong className="text-dark">Genre:</strong> {movie.genre}</p>
                            <p className="mb-3 text-muted"><strong className="text-dark">Year:</strong> {movie.release_year}</p>
                            <hr className="ms-auto w-25" />
                            <p className="card-text text-muted fst-italic mt-3">{movie.abstract}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewForm movieId={id} reviews={reviews} setReviews={setReviews} />
        </div>
    );
}
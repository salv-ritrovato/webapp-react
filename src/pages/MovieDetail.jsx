import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MovieDetail() {

    const { id } = useParams(); // 
    const serverAddress = import.meta.env.VITE_BACKEND_ADDRESS;
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`${serverAddress}/movies/${id}`)
            .then((response) => response.json())
            .then((data) => setMovie(data));
    }, [id]); //

    if (!movie) return <p>Page loading...</p>;

    return (
        <div className="container mt-4">
            <div className="card">
                <img src={`${serverAddress}/images/${movie.image}`} className="card-img-top" alt={movie.title} />
                <div className="card-body">
                    <h1 className="card-title">{movie.title}</h1>
                    <p><strong>Regista:</strong> {movie.director}</p>
                    <p><strong>Genere:</strong> {movie.genre}</p>
                    <p><strong>Anno:</strong> {movie.release_year}</p>
                    <p className="card-text">{movie.abstract}</p>
                </div>
            </div>
        </div>
    );
}
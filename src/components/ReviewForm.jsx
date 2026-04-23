import { useState } from 'react';

export default function ReviewForm({ movieId }) {
    const serverAddress = import.meta.env.VITE_BACKEND_ADDRESS;

    const [formData, setFormData] = useState({
        name: '',
        vote: '',
        text: ''
    });

    function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch(`${serverAddress}/movies/${movieId}/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setFormData({ name: '', vote: '', text: '' });
                alert('Review sent successfully!');
            });
    }

    return (
        <div className="container mt-5">
            <div className="card border-0 shadow-lg rounded-4 p-4">
                <h3 className="fw-bold mb-4">Leave your opinion!</h3>
                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Rating (1-5)</label>
                        <input
                            type="number"
                            className="form-control"
                            name="vote"
                            min="1"
                            max="5"
                            value={formData.vote}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Review</label>
                        <textarea
                            className="form-control"
                            name="text"
                            rows="4"
                            value={formData.text}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-dark w-100">
                        Send review!
                    </button>

                </form>
            </div>
        </div>
    );
}
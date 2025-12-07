import React, { useState, useEffect } from 'react';

const ReviewSection = ({ productId }) => {
    const [reviews, setReviews] = useState([]);
    const [name, setName] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(5);

    useEffect(() => {
        const storedReviews = JSON.parse(localStorage.getItem('product-reviews')) || {};
        if (storedReviews[productId]) {
            setReviews(storedReviews[productId]);
        }
    }, [productId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !comment) return;

        const newReview = {
            id: Date.now(),
            name,
            comment,
            rating,
            date: new Date().toLocaleDateString()
        };

        const storedReviews = JSON.parse(localStorage.getItem('product-reviews')) || {};
        const productReviews = storedReviews[productId] || [];
        const updatedProductReviews = [newReview, ...productReviews];

        storedReviews[productId] = updatedProductReviews;
        localStorage.setItem('product-reviews', JSON.stringify(storedReviews));

        setReviews(updatedProductReviews);
        setName('');
        setComment('');
        setRating(5);
    };

    return (
        <div className="review-section section-p1">
            <h3>Customer Reviews</h3>

            <div className="review-form">
                <h4>Write a Review</h4>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <div className="rating-input">
                        <span>Rating: </span>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                className={`star ${star <= rating ? 'filled' : ''}`}
                                onClick={() => setRating(star)}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <textarea
                        placeholder="Your Review"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" className="normal">Submit Review</button>
                </form>
            </div>

            <div className="reviews-list">
                {reviews.length === 0 ? (
                    <p>No reviews yet. Be the first to review!</p>
                ) : (
                    reviews.map(review => (
                        <div key={review.id} className="review-item">
                            <div className="review-header">
                                <strong>{review.name}</strong>
                                <span className="review-date">{review.date}</span>
                            </div>
                            <div className="review-rating">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className={`star ${i < review.rating ? 'filled' : ''}`}>★</span>
                                ))}
                            </div>
                            <p>{review.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ReviewSection;

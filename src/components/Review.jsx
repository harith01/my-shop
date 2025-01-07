import React from 'react';
import StarRating from './StarRating';

const Review = ({ review }) => {
    return (
        <div className="mt-5">
            <div className='flex items-center gap-2 font-semibold'>
                <h3>{review.reviewerName}</h3>
                <p>on {new Date(review.date).toLocaleDateString()}</p>
            </div>
            <StarRating rating={review.rating} />
            <p>{review.comment}</p>
        </div>
    );
};

export default Review;
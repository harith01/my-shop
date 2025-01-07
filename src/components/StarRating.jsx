import React from 'react';
import { FaStar } from 'react-icons/fa6';

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<span key={i}><FaStar className='text-yellow-200 inline' /></span>); // Filled star
        } else {
            stars.push(<span key={i}><FaStar className='inline' /></span>); // Empty star
        }
    }

    return <div>{stars}</div>;
};

export default StarRating;
import React from 'react';
import Rating from 'react-rating';
import { useState, useEffect } from 'react';
import ReviewDetails from '../ReviewDetails/ReviewDetails';
import './DisplayReview.css';

const DisplayReview = () => {
  const [reviews, setReview] = useState([]);

  useEffect(() => {
    fetch('https://carzone-server-4ww6.onrender.com/review')
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);

  return (
    <div className="mt-5">
      <h1 className="fw-bold text-info">All Happy Customer Reviews</h1>
      <p>
        Check here .read some comments, you will collect more information about
        new car.
      </p>
      {!reviews?.length ? (
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="customer-review pb-5">
          {reviews?.map((review, index) => (
            <ReviewDetails review={review} key={index}></ReviewDetails>
          ))}
        </div>
      )}
      {/* <h2 className="fw-bold text-info mb-5">Car-House Best Collection</h2> */}
    </div>
  );
};

export default DisplayReview;

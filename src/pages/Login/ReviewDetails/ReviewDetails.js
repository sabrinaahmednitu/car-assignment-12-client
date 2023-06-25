import React from 'react';
import Rating from "react-rating";
import './Review.css'

const ReviewDetails = ({review}) => {
    const {stars, comments, email, customerName} = review;

    return (
      <div>
        <div className="comment-card mt-3 h-100">
          <div className=" p-4">
            <img style={{ width: '100%' }} src="" alt="" />
            <div className="text-start">
              <p>Review & Ratings : </p>
              <p className="">{comments}</p>
              <Rating
                className="d-block text-start"
                readonly
                initialRating={stars}
                fullSymbol="fas fa-star text-warning"
                emptySymbol="far fa-star"
              >
              </Rating>
              <br />
              <h6> {email}</h6>
              <h6 className="">{customerName}</h6>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ReviewDetails;
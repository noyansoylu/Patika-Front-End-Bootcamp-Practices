import React from 'react';
import './Review.css';

const ReviewCard = ({ image, name, title, position, comment }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="d-flex align-items-center">
        <img src={image} alt={name} className="client-img" />
        <p className="ps-3">
          <span className="fw-semibold">{title}</span> <br />
          {position}
        </p>
      </div>
      <div className="comment">
        {comment}
      </div>
    </div>
  );
};

export default ReviewCard;

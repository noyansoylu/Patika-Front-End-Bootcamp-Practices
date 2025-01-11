import React from 'react';
import './Purchase.css';

const PurchaseCard = ({ image, title, originalPrice, discountedPrice }) => {
  return (
    <div className="col">
      <div className="card purchase-cards shadow-lg">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <span className="text-decoration-line-through">{originalPrice}</span> / {discountedPrice}
          </p>
          <p className="card-text cart-container">
            <i className="bi bi-cart-fill"></i>
            <span style={{ cursor: 'pointer' }}>Add To Cart</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseCard;

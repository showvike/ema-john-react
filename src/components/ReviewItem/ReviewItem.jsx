import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product }) => {
  const { img, name, price, quantity, id } = product;
  return (
    <div className="review-item">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h6>{name}</h6>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ReviewItem;

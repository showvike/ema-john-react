import React from "react";
import "./ReviewItem.css";

const ReviewItem = ({ product, handleCart }) => {
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
        <button onClick={() => handleCart(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ReviewItem;

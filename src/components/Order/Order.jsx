import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);
  const handleCart = (id) => {
    const remaining = cart.filter((pd) => id !== pd.id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleCart={handleCart}
          ></ReviewItem>
        ))}
      </div>
      <div>
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to="/checkout">
            <button>
              Processed Checkout
              <FontAwesomeIcon className="fa-arrow-right" icon={faArrowRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;

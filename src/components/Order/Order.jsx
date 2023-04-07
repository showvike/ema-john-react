import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Order = () => {
  const cart = useLoaderData();
  return (
    <div className="shop">
      <div className="products">
        <h1>This is order: {cart.length}</h1>
      </div>
      <div>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;

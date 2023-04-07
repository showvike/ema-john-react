import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Order = () => {
  const products = useLoaderData();
  return (
    <div className="shop">
      <div className="products">
        <h1>This is order: {products.length}</h1>
      </div>
      <div>
        <Cart cart={[]}></Cart>
      </div>
    </div>
  );
};

export default Order;

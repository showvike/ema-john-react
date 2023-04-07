import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import Order from "./components/Order/Order";
import Review from "./components/Review/Review";
import Shop from "./components/Shop/Shop";
import cartProductsLoader from "./loaders/cartProductsLoader";
import "./main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: cartProductsLoader,
      },
      {
        path: "/review",
        element: <Review></Review>,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      { path: "/checkout", element: <Checkout></Checkout> },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Cart from "../Pages/Cart/Cart";
import Checkout from "../Pages/Checkout/Checkout";
import DateDeliver from "../Pages/DateDelivery/DateDeliver";
import Help from "../Pages/Help";
import HomePage from "../Pages/HomePage/HomePage";
import Plans from "../Pages/Plans/Plans.jsx";
import { PrivateRoute } from "./PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/deliverydate" element={<DateDeliver />} />
      <Route path="/plans" element={<Plans />} />
      {/* <Route path="/payment" element={<Payment />} />
      <Route path="/thankyou" element={<Thankyou />} /> */}
      {/* <Route path="/plansandmenus" element={<MenuPlans />} /> */}
      <Route path="/login" element={<Login />} />
      <Route path="/help" element={<Help />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/checkout"
        element={
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AllRoutes;

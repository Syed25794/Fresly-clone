import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Cart from "../Pages/Cart/Cart";
import { Checkout } from "../Pages/Checkout/Checkout";
import Help from "../Pages/Help";
import HomePage from "../Pages/HomePage/HomePage";
import Plans from "../Pages/Plans/Plans.jsx";
import { PrivateRoute } from "./PrivateRoute";

import DateSelector from "../Pages/Cart/DataDelivery";
import { Payment } from "../Pages/Checkout/Payment";
import { Thankyou } from "../Pages/Checkout/Thankyou";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/plans" element={<Plans />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/deliverydate" element={<DateSelector />} />
      <Route path="/login" element={<Login />} />
      <Route path="/help" element={<Help />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/thankyou" element={<Thankyou />} />
    </Routes>
  );
};

export default AllRoutes;

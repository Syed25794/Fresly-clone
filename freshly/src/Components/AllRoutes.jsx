import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import Cart from "../Pages/Cart/Cart";
import {Checkout} from "../Pages/Checkout/Checkout";
import Help from "../Pages/Help";
import HomePage from "../Pages/HomePage/HomePage";
import Plans from "../Pages/Plans/Plans.jsx";
import DateSelector from "../Pages/Cart/DataDelivery"


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/plans" element={<Plans/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/deliverydate" element={<DateSelector/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/help" element={<Help />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
    </Routes>
  );
};

export default AllRoutes;

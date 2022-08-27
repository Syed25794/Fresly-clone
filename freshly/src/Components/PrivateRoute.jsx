import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const isAuth = useSelector((state) => state.Auth.isAuth);
  const navigate = useNavigate();
  if (!isAuth) {
    return navigate("/login");
  }
  return { children };
};

import React from "react";
import { Outlet , Navigate } from "react-router-dom";

export const Protected = () => {
 return localStorage.getItem("UserId") ? <Outlet /> : <Navigate to={"/login"} />
} 
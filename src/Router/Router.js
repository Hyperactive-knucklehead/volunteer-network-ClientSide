import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import NavigationBar from "../Components/Shared/NavigationBar/NavigationBar";
import Signup from "../Components/Signup/Signup";

const AppRouter = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

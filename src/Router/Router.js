import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import NavigationBar from "../Components/Shared/NavigationBar/NavigationBar";
import Signup from "../Components/Signup/Signup";
import PrivateRoute from "../Private/PrivateRoute";

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
        <Route
          path="/register/:eventId"
          element={
            <PrivateRoute>
              <Registration />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Forbidden from "../Components/Forbidden/Forbidden";
import ForgotPassword from "../Components/ForgotPassword/ForgotPassword";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import NotFound from "../Components/NotFound/NotFound";
import Registration from "../Components/Registration/Registration";
import NavigationBar from "../Components/Shared/NavigationBar/NavigationBar";
import Signup from "../Components/Signup/Signup";
import UserEvents from "../Components/UserEvents/UserEvents";
import PrivateRoute from "../Private/PrivateRoute";
import MakeAdmin from "../Components/MakeAdmin/MakeAdmin";
import AdminRoute from "../Admin/AdminRoute";
import AddEvent from "../Components/AddEvent/AddEvent";
import ManageEvents from "../Components/ManageEvents/ManageEvents";
import RegisteredEvents from "../Components/RegisteredEvents/RegisteredEvents";

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
        <Route
          path="/registeredEvents/myEvents"
          element={
            <PrivateRoute>
              <UserEvents />
            </PrivateRoute>
          }
        />
        <Route
          path="/makeAdmin"
          element={
            <AdminRoute>
              <MakeAdmin />
            </AdminRoute>
          }
        />
        <Route
          path="/addEvent"
          element={
            <AdminRoute>
              <AddEvent />
            </AdminRoute>
          }
        />
        <Route
          path="/manageAllEvent"
          element={
            <AdminRoute>
              <ManageEvents />
            </AdminRoute>
          }
        />
        <Route
          path="/allRegisteredEvent"
          element={
            <AdminRoute>
              <RegisteredEvents />
            </AdminRoute>
          }
        />
        <Route path="/forbidden" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

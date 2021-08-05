import React, { useContext } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import HomeNavigation from "./Components/Navigation/HomeNavigation/HomeNavigation";
import Services from "./Components/Services/Services/Services";
import ServiceDetails from "./Components/Services/ServiceDetails/ServiceDetails";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import UserDashboard from "./Components/Dashboard/UserDashboard/UserDashboard/UserDashboard";
import UserNavigation from "./Components/Dashboard/UserDashboard/UserNavigation/UserNavigation";
import AdminDashboard from "./Components/Dashboard/AdminDashboard/AdminDashboard/AdminDashboard";
import AdminNavigation from "./Components/Dashboard/AdminDashboard/AdminNavigation/AdminNavigation";
import Login from "./Components/AuthForms/Login/Login";
import SignUp from "./Components/AuthForms/SignUp/SignUp";
import { Context } from "./Context/Context";
import Footer from "./Components/Shared/Footer/Footer";
import "./App.css";

function App() {
  const location = useLocation();
  const { userData } = useContext(Context);

  return (
    <React.Fragment>
      {location.pathname === "/userDashboard" ? (
        <UserNavigation />
      ) : location.pathname === "./adminDashboard" ? (
        <AdminNavigation />
      ) : (
        <HomeNavigation />
      )}
      <main>
        <Switch>
          <Route exact path="/">
            <Services />
          </Route>
          <Route path="/serviceDetails">
            <ServiceDetails />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
          <PrivateRoute path="/userDashboard">
            <UserDashboard />
          </PrivateRoute>
          <PrivateRoute path="/adminDashboard">
            <AdminDashboard />
          </PrivateRoute>
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

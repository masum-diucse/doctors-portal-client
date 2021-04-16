import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Appointment from "./components/Appointment/Appointment/Appointment";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Paitients from "./components/Dashboard/Paitients/Paitients";
import Home from "./components/Home/Home/Home";
import Login from "./components/Login/Login/Login";
import PrivateRoute from "./components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
const  App=()=> {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
       <Router>
        <Switch>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <PrivateRoute path="/dashboard/appointment">
           <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/dashboard/patients">
           <Paitients></Paitients>
          </Route>
          <Route path="/dashboard/doctor">
           <AddDoctor></AddDoctor>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
   
  );
}

export default App;

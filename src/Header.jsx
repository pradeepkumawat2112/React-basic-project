import "./style.css";
import Registeration from "./Register";
import Login from "./Login";
import Home from "./Home";
import Dash from "./Dashboard";
import PrivateRoute from "./Private";
import LoginEmp from "./LoginEmp";
import LogOutEmp from "./LogOutEmp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = ({ IsLoggedIn }) => {
  if (IsLoggedIn) {
    <LoginEmp />;
  } else {
    <LogOutEmp />;
  }

  return (
    <>
      <Router>
        <div>
          <nav className="nav">
            <ul className="ul">
              <li>
                <Link to="/home"> Home</Link>
              </li>
              <li>
                <Link to="/Login"> Login </Link>
              </li>
              <li>
                <Link to="/Registeration"> Registration</Link>
              </li>
              <li>
                <Link to="/dashboard"> DashBoard </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <PrivateRoute exact path="/home">
              <Home />{" "}
            </PrivateRoute>
            <Route exact path="/Login">
              <Login />{" "}
            </Route>
            <Route exact path="/Registeration">
              <Registeration />{" "}
            </Route>
            <Route path="/dashboard">
              {" "}
              <Dash IsLoggedIn={true} />{" "}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Header;

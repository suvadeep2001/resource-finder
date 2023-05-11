import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import Homepage from "../pages/Homepage";
import Loginpage from "../pages/Loginpage";
import NotfoundPage from "../pages/NotfoundPage";
import Profilepage from "../pages/Profilepage";
import ProtectedPage from "../pages/ProtectedPage";
import Registerpage from "../pages/Registerpage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import { useAuth } from "../contexts/AuthContext";
import {
  Redirect,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import DataStructure from "../pages/DataStructure";
import DbmsResources from "../pages/DbmsResources";
import OopsResources from "../pages/OopsResources";
import Quiz from "../pages/Quiz";

export default function AppRouter(props) {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <ProtectedRoute exact path="/login" component={Loginpage} />
          <ProtectedRoute exact path="/register" component={Registerpage} />
          <ProtectedRoute exact path="/profile" component={Profilepage} />
          <ProtectedRoute exact path="/resources/dsa" component={DataStructure} />
          <ProtectedRoute exact path="/resources/dbms" component={DbmsResources} />
          <ProtectedRoute exact path="/resources/oops" component={OopsResources} />
          <ProtectedRoute exact path="/trending/aptitude" component={Quiz} />
          
          <ProtectedRoute
            exact
            path="/resources"
            component={ProtectedPage}
          />
          <ProtectedRoute
            exact
            path="/forgot-password"
            component={ForgotPasswordPage}
          />
          <ProtectedRoute
            exact
            path="/reset-password"
            component={ResetPasswordPage}
          />
          
          <Route exact path="*" component={NotfoundPage} />
        </Switch>
      </Router>
    </>
  );
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  const location = useLocation();
  const { path } = props;

  if (
    path == "/login" ||
    path == "/register" ||
    path == "/reset-password" ||
    path == "/forgot-password"
  ) {
    return currentUser && currentUser.emailVerified ? (
      <Redirect to={location.state?.from ?? "/profile"} />
    ) : (
      <Route {...props} />
    );
  }

  return currentUser && currentUser.emailVerified ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { from: path },
      }}
    />
  );
}

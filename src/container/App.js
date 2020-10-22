import React from "react";

import "font-awesome/css/font-awesome.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ThemeProvider } from "styled-components";

import theme from "../Theme/theme";

import { AppWrap } from "./Style";

import Login from "../pages/Login/login";

import SignUp from "../pages/SignUp/signUp";

import Routing from "../Routers/Routing";

import error from "../pages/errorpage/errorpage";

import fire from "../Firebase/firebase";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
    sessionStorage.getItem("users");
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user && sessionStorage.length ===1) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <AppWrap>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route path="/" exact component={Login} />,
              <Route path="/SignUp" exact component={SignUp} />
              <Route
                path={["/dashBoard", "/explore AI", "/viewCaseStudy", "/contact"]}
                exact
                render={() =>
                  this.state.user ? <Routing /> : <Redirect to="/" />
                }
              />
              <Route path="*" exact component={error} />
            </Switch>
          </Router>
        </ThemeProvider>
      </AppWrap>
    );
  }
}

export default App;

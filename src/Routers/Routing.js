import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard/Dashboard";

import Header from "../CommonComponents/Header/Header";

import ViewCaseStudy from "../pages/CaseStudy/CaseStudy";

import SideDrawer from "../CommonComponents/SideBar/SideBar";

import { AppContainer, MainContainer } from "../container/Style";

import ContactPage from "../pages/Contact/contact";

class Routing extends Component {
  render() {
    return (
      <React.Fragment>
        <AppContainer>
          <SideDrawer />
          <MainContainer>
            <Header />
            <Router>
              <Switch>
                <Route path="/dashBoard" exact component={Dashboard} />
                <Route path="/viewCaseStudy" exact component={ViewCaseStudy} />
                <Route path="/contact" exact component={ContactPage} />
              </Switch>
              {/* <Route path="/contact" exact component={ContactPage} /> */}
            </Router>
          </MainContainer>
        </AppContainer>
      </React.Fragment>
    );
  }
}

export default Routing;

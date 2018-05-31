import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PersonalInformation from "./components/personal_information/PersonalInformation.js";
import { Home, Gather4Good, GetLunchDenver } from "./components/projects";
import NavTabs from "./components/navtabs/NavTabs.js";

class App extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <PersonalInformation />
        </Row>
        <Row>
          <Router>
            <div>
              <NavTabs />
              <Route exact path="/" component={Home} />
              <Route exact path="/gather4good" component={Gather4Good} />
              <Route exact path="/getlunchdenver" component={GetLunchDenver} />
            </div>
          </Router>
        </Row>
      </Grid>
    );
  }
}

export default App;

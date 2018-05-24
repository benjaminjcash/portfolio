import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PersonalInformation from "./components/personal_information/PersonalInformation.js";
import { Home, Gather4Good, Project2 } from "./components/projects";
import NavTabs from "./components/NavTabs.js";

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
              <Route exact path="/proj2" component={Project2} />
            </div>
          </Router>
        </Row>
      </Grid>
    );
  }
}

export default App;

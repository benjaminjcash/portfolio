import React, { Component } from 'react';
import { Grid, Row, Panel } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from "react-router-dom";
import PersonalInformation from "./components/personal_information/PersonalInformation.js";
import { Home, Gather4Good, GetLunchDenver } from "./components/projects";
import NavTabs from "./components/navtabs/NavTabs.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Grid id="page-container">
        <Row>
          <PersonalInformation />
        </Row>
        <Row>
          <Panel>
            <Panel.Heading id="project-panel-header">
              <h1>Projects</h1>
            </Panel.Heading>
            <Panel.Body>
              <Router>
                <div>
                  <NavTabs />
                  <Route exact path="/" component={Home} />
                  <Route exact path="/gather4good" component={Gather4Good} />
                  <Route exact path="/getlunchdenver" component={GetLunchDenver} />
                </div>
              </Router>
            </Panel.Body>
          </Panel>
        </Row>
      </Grid>
    );
  }
}

export default App;

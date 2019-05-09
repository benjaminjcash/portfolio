import React, { Component } from 'react';
import { Grid, Row, Panel } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PersonalInformation from "./components/personal_information/PersonalInformation.js";
import { Home, Gather4Good, GetLunchDenver, MistyRobotics } from "./components/projects";
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
          <Router>
            <Panel>
              <Panel.Heading id="project-panel-header">
                <Link id="home-link" to="/"><h1>Projects</h1></Link>
              </Panel.Heading>
              <Panel.Body>
                  <div>
                    <NavTabs />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/misty" component={MistyRobotics} />
                    <Route exact path="/gather4good" component={Gather4Good} />
                    <Route exact path="/getlunchdenver" component={GetLunchDenver} />
                  </div>
              </Panel.Body>
            </Panel>
          </Router>
        </Row>
      </Grid>
    );
  }
}

export default App;

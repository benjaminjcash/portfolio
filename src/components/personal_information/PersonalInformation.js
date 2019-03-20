import React from "react";
import { Grid, Row, Col, Panel, Image } from "react-bootstrap";
import "./PersonalInformation.css"
import ben from "../../images/ben.jpg";
import DU_logo from '../../images/education/DU_logo.jpg';
import CU_logo from '../../images/education/CU_logo.jpg';
import misty_dark_logo from '../../images/misty/misty_dark_logo.png';

const PersonalInformation = () => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={6}>
          <Row>
              <Col md={12}>
                <Panel>
                  <Panel.Heading id="name-panel-header">
                    <h1 id="name">Benjamin Cash</h1>
                  </Panel.Heading>
                  <Panel.Body>
                    <h2 id="bio">Software Developer with a foundation in object-oriented programming in JavaScript and C#. Able to build RESTful APIs, work with relational and
                          non-relational databases, and develop robust single page applications using ReactJS and Redux.</h2>
                    <h3>Currently seeking employment on the front range.</h3>
                  </Panel.Body>
                </Panel>
              </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Panel>
                <Panel.Heading id="skills-panel-header">
                  <h2>Technical Skills</h2>
                </Panel.Heading>
                <Panel.Body id="skills-panel">
                  <ul id="skills">
                      <li>Node.js, React, Redux, Express, C# / .NET, JavaScript / TypeScript, REST API, Websockets, MVC Framework, MongoDb / Mongoose, MySQL / Sequelize, Firebase, Visual Studio, Git / Github,
  HTML5 / CSS3, JQuery, Handlebars, Bootstrap / Materialize, AWS, Linux CLI / Bash, Mocha / Chai</li>
                  </ul>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Panel>
                <Panel.Heading id="education-panel-header">
                    <h2>Education</h2>
                </Panel.Heading>
                <Panel.Body>
                    <Row>
                      <Col md={2}>
                        <Image id="DU_logo" src={DU_logo} alt="image not found" />
                      </Col>
                      <Col md={10}>
                        <ul id="education">
                          <li>
                            <h3>Full Stack Web Development Bootcamp</h3>
                            <p>Denver University</p>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={2}>
                        <Image id="CU_logo" src={CU_logo} alt="image not found" />
                      </Col>
                      <Col md={10}>
                        <ul id="education">
                          <li>
                            <h3>BA Mathematics</h3>
                            <p>Univeristy of Colorado Boulder</p>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                </Panel.Body>
              </Panel>
            </Col>
          </Row>
          <Row>
              <Col md={12}>
                  <Panel>
                      <Panel.Heading id="experience-panel-header">
                          <h2>Development Experience</h2>
                      </Panel.Heading>
                      <Panel.Body>
                        <Row>
                          <Col md={2}>
                            <Image id="misty-dark-logo" src={misty_dark_logo} alt="image not found"/>
                          </Col>
                          <Col md={10}>
                            <ul id="experience">
                                <li>
                                  <h3>Misty Robotics</h3>
                                  <p>Junior Software Engineer</p>
                                  <ul>
                                    <li>Built API for Home Robot Application in C# using Visual Studio IDE</li>
                                    <li>Produced Automated Regression Test Suite for Home Robot Platform in JavaScript</li>
                                    <li>Wrote Internal Technical Documentation and Tutorials / Code Samples for users</li>
                                    <li>Replaced and installed circuit boards and wiring</li>
                                    <li>Collaborated in an Agile Environment with SCRUM methodologies using Microsoft Azure</li>
                                  </ul>
                                </li>
                            </ul>
                          </Col>
                        </Row>
                      </Panel.Body>
                  </Panel>
              </Col>
          </Row>
      </Col>
      <Col xs={12} md={6}>
          <Row>
              <Col xs={12} md={12}>
                      <Image id="ben" src={ben} alt="img not found" />
              </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
                <Panel>
                    <Panel.Heading id="contact-panel-header">
                        <h2>Contact</h2>
                    </Panel.Heading>
                    <Panel.Body><Row>
                        <ul id="contact">
                            <li><h3 id="myemail">ben@benjamincash.com</h3></li>
                        </ul>
                    </Row>
                        <Row>
                            <a href="https://github.com/benjaminjcash" target="_blank" rel="noopener noreferrer"><i id="github" className="contact-icons fab fa-github-square fa-3x hidden-xs"></i></a>
                            <a href="https://www.linkedin.com/in/benjamincash" target="_blank" rel="noopener noreferrer"><i id="linkedin" className="contact-icons fab fa-linkedin fa-3x hidden-xs"></i></a>
                            <a href="https://www.hackerrank.com/cashbenj" target="_black" rel="noopener noreferrer"><i id="hackerrank" className="contact-icons fab fa-hackerrank fa-3x hidden-xs"></i></a>
                            <a href="https://github.com/benjaminjcash" target="_blank" rel="noopener noreferrer"><i id="github" className="contact-icons fab fa-github-square fa-10x hidden-sm hidden-md hidden-lg hidden-xl"></i></a>
                            <a href="https://www.linkedin.com/in/benjamincash" target="_blank" rel="noopener noreferrer"><i id="linkedin" className="contact-icons fab fa-linkedin fa-10x hidden-sm hidden-md hidden-lg hidden-xl"></i></a>
                            <a href="https://www.hackerrank.com/cashbenj" target="_black" rel="noopener noreferrer"><i id="hackerrank" className="contact-icons fab fa-hackerrank fa-10x hidden-sm hidden-md hidden-lg hidden-xl"></i></a>
                        </Row>
                    </Panel.Body>
                </Panel>
            </Col>
          </Row>
        </Col>
      </Row>
    </Grid>
  )
}

export default PersonalInformation
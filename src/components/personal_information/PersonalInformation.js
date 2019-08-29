import React from "react";
import { Grid, Row, Col, Panel, Image } from "react-bootstrap";
import "./PersonalInformation.css"
import ben from "../../images/ben.jpg";
import DU_logo from '../../images/education/DU_logo.jpg';
import CU_logo from '../../images/education/CU_logo.jpg';
import regis_logo from '../../images/education/regis_logo.png';
import misty_dark_logo from '../../images/misty/misty_dark_logo.png';
import rlhco_logo from '../../images/rlhco/rlhco_logo.jpeg';

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
                  <Panel.Body id="bio">
                    <h2>Software Developer with a broad understanding of object-oriented architecture and design.</h2>
                    <h3>Currently employeed as a full-stack dev for RLH Corp based out of Denver and I'm working towards earning
                      my MS in Software Engineering at Regis University.
                    </h3>
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
                  <Row>
                    <Col md={6}>
                      <ul class="skills">
                        <li>Node.js</li>
                        <li>ReactJS</li>
                        <li>php8</li>
                        <li>Drupal</li>
                        <li>MySQL</li>
                      </ul>
                    </Col>
                    <Col md={6}>
                      <ul class="skills">
                        <li>Git</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>jQuery</li>
                        <li>Handlebars</li>
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
                <Panel.Heading id="education-panel-header">
                    <h2>Education</h2>
                </Panel.Heading>
                <Panel.Body>
                    <Row>
                      <Col className="ed-logo-cols" md={2} xs={1}>
                        <Image id="regis_logo" src={regis_logo} alt="image not found" />
                      </Col>
                      <Col className="ed-detail-cols" md={10} xs={11}>
                        <ul className="education">
                          <li>
                            <h3>MS Software Engineering</h3>
                            <p>Regis University</p>
                            <p>2019 - present</p>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ed-logo-cols" md={2} xs={1}>
                        <Image id="DU_logo" src={DU_logo} alt="image not found" />
                      </Col>
                    <Col className="ed-detail-cols" md={10} xs={11}>
                        <ul className="education">
                          <li>
                            <h3>Full Stack Web Development Bootcamp</h3>
                            <p>Denver University</p>
                            <p>2017 - 2018</p>
                          </li>
                        </ul>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="ed-logo-cols" md={2} xs={1}>
                        <Image id="CU_logo" src={CU_logo} alt="image not found" />
                      </Col>
                    <Col className="ed-detail-cols" md={10} xs={11}>
                        <ul className="education">
                          <li>
                            <h3>BA Mathematics</h3>
                            <p>Univeristy of Colorado Boulder</p>
                            <p>2008 - 2013</p>
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
                          <Col id="exp-logo-column" md={2} xs={1}>
                            <Image id="rlhco-logo" src={rlhco_logo} alt="image not found"/>
                          </Col>
                          <Col id="exp-detail-column" md={10} xs={11}>
                            <ul id="experience">
                                <li>
                                  <h3>Red Lion Hotels Corporation</h3>
                                  <p>Jr. Software Developer</p>
                                  <p>April 2019 - present</p>
                                  <ul id="experience-details">
                                    <li>Maintain and develop multiple applications, both public-facing and for internal use</li>
                                    <li>Work across the stack building modules for our multi-site backend application (CORE) using PHP, as
                                      well as writing business logic for the client application using Javascript, JQuery and Handlebars.
                                    </li>
                                  </ul>
                                </li>
                            </ul>
                          </Col>
                        </Row>
                        <Row>
                          <Col id="exp-logo-column" md={2} xs={1}>
                            <Image id="misty-dark-logo" src={misty_dark_logo} alt="image not found"/>
                          </Col>
                          <Col id="exp-detail-column" md={10} xs={11}>
                            <ul id="experience">
                                <li>
                                  <h3>Misty Robotics (short-term contract)</h3>
                                  <p>Junior Software Engineer</p>
                                  <p>August 2018 - November 2018</p>
                                  <ul id="experience-details">
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
              <Col md={12}>
                <Image id="ben" src={ben} alt="img not found" />
              </Col>
          </Row>
          <Row>
            <Col xs={12} md={12}>
                <Panel>
                    <Panel.Heading id="contact-panel-header">
                        <h2>Connect</h2>
                    </Panel.Heading>
                    <Panel.Body>
                      <Row>
                        <a href='mailto:ben@benjamincash.com'><i id="email" className="contact-icons fas fa-envelope fa-6x hidden-sm hidden-xs"></i></a>
                        <a href='mailto:ben@benjamincash.com'><i id="email" className="contact-icons fas fa-envelope fa-5x hidden-xs hidden-md hidden-lg hidden-xl"></i></a>
                        <a href='mailto:ben@benjamincash.com'><i id="email" className="contact-icons fas fa-envelope fa-5x hidden-sm hidden-md hidden-lg hidden-xl"></i></a>
                        
                        <a href="https://www.linkedin.com/in/benjamincash" target="_blank" rel="noopener noreferrer"><i id="linkedin" className="contact-icons fab fa-linkedin fa-6x hidden-sm hidden-xs"></i></a>
                        <a href="https://github.com/benjaminjcash" target="_blank" rel="noopener noreferrer"><i id="github" className="contact-icons fab fa-github-square fa-6x hidden-sm hidden-xs"></i></a>
                        <a href="https://www.hackerrank.com/cashbenj" target="_black" rel="noopener noreferrer"><i id="hackerrank" className="contact-icons fab fa-hackerrank fa-6x hidden-sm hidden-xs"></i></a>

                        <a href="https://www.linkedin.com/in/benjamincash" target="_blank" rel="noopener noreferrer"><i id="linkedin" className="contact-icons fab fa-linkedin fa-5x hidden-xs hidden-md hidden-lg hidden-xl"></i></a>
                        <a href="https://github.com/benjaminjcash" target="_blank" rel="noopener noreferrer"><i id="github" className="contact-icons fab fa-github-square fa-5x hidden-xs hidden-md hidden-lg hidden-xl"></i></a>
                        <a href="https://www.hackerrank.com/cashbenj" target="_black" rel="noopener noreferrer"><i id="hackerrank" className="contact-icons fab fa-hackerrank fa-5x hidden-xs hidden-md hidden-lg hidden-xl"></i></a>

                        <a href="https://www.linkedin.com/in/benjamincash" target="_blank" rel="noopener noreferrer"><i id="linkedin" className="contact-icons fab fa-linkedin fa-5x hidden-sm hidden-md hidden-lg hidden-xl"></i></a>
                        <a href="https://github.com/benjaminjcash" target="_blank" rel="noopener noreferrer"><i id="github" className="contact-icons fab fa-github-square fa-5x hidden-sm hidden-md hidden-lg hidden-xl"></i></a>
                        <a href="https://www.hackerrank.com/cashbenj" target="_black" rel="noopener noreferrer"><i id="hackerrank" className="contact-icons fab fa-hackerrank fa-5x hidden-sm hidden-md hidden-lg hidden-xl"></i></a>
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
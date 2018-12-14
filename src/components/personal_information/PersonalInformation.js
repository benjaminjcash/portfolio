import React from "react";
import { Grid, Row, Col, Panel, Image } from "react-bootstrap";
import "./PersonalInformation.css"
import ben from "../../images/ben.jpg";

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
                                    <h2 id="bio">Software Developer with a solid foundation in object-oriented programming in JavaScript and C#. Able to build RESTful APIs, work with relational and
                                        non-relational database structures, and develop robust single page applications using ReactJS.
									</h2>
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
                                        <li>Node.js, Express, C# / .NET, JavaScript / TypeScript, ReactJS, REST API, Websockets, MongoDb / Mongoose, MySQL / Sequelize, Firebase, Visual Studio, Git / Github,
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
                                    <ul id="education">
                                        <li>
                                            <h3>Denver University Coding Bootcamp</h3>
                                            <p>Full Stack Development Program</p>
											<p>November 2017 - May 2018</p>
                                        </li>
                                        <li>
                                            <h3>University of Colorado Boulder</h3>
                                            <p>BA: Mathematics, comprehensive focus</p>
                                        </li>
                                    </ul>
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
                                    <ul id="experience">
                                        <li>
                                            <h3>Misty Robotics (project)</h3>
                                            <p>Junior Software Engineer</p>
											<ul>
												<li>Developed software for the Home Robot Application</li>
												<li>Wrote internal technical documentation and tutorials / code samples for users</li>
												<li>Produced an automated regresssion test suite for engineering use</li>
												<li>Replaced / installed hardware</li>
												<li>Worked in an Agile enviroment with scrum methodologies</li>
											</ul>
											<p>August 2018 - November 2018</p>
                                        </li>
                                    </ul>
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
                                        <a href="https://github.com/benjaminjcash" target="_blank" rel="noopener noreferrer"><i id="github" className="contact-icons fab fa-github-square fa-10x hidden-sm hidden-md hidden-lg hidden-xl"></i></a>
                                        <a href="https://www.linkedin.com/in/benjamincash" target="_blank" rel="noopener noreferrer"><i id="linkedin" className="contact-icons fab fa-linkedin fa-10x hidden-sm hidden-md hidden-lg hidden-xl"></i></a>
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
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
                                    <h2>Full Stack web developer currently seeking employment on the front range.</h2>
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
                                        <li>Node.js, React, Express, JQuery, HTML, CSS Handlebars, REST, MySQL, Sequelize, MongoDB, Mongoose, Firebase, MERN Stack, MVC
                                            Git/Github</li>
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
                                            <p>Full Stack Web Development Program</p>
                                        </li>
                                        <li>
                                            <h3>University of Colorado Boulder</h3>
                                            <p>BA in Mathematics, comprehensive focus</p>
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
                                        <li><h3>303-718-6299</h3></li>
                                    </ul>
                                </Row>
                                    <Row>
                                        <a href="https://github.com/benjaminjcash"><i id="github" className="contact-icons fab fa-github-square fa-3x"></i></a>
                                        <a href="https://www.linkedin.com/in/benjamincash"><i id="linkedin" className="contact-icons fab fa-linkedin fa-3x"></i></a>
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
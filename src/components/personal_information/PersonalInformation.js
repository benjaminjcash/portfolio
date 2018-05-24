import React from "react";
import { Grid, Row, Col, Panel, Image } from "react-bootstrap";
import "./PersonalInformation.css"
import ben from "../../images/ben.png";

const PersonalInformation = () => {

    return (
        <Grid>
            <Row>
                <Col xs={12} md={6}>
                    <Row>
                        <Col md={12}>
                            <Panel>
                                <Panel.Heading>
                                    <h1 className="nameTitle">Benjamin Cash</h1>
                                </Panel.Heading>
                                <Panel.Body>
                                    <i>Passionate and motivated web engineer with a Mathematics background.</i>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Panel>
                                <Panel.Heading>
                                    <h3>Technical Skills</h3>
                                </Panel.Heading>
                                <Panel.Body>
                                    <ul>
                                        <li>Node.js, React.js, Express.js, JQuery, HTML, CSS Handlebars, REST, MySQL, Sequelize, MongoDB, Mongoose, Firebase</li>
                                        <li>Git/Github, CLI proficiency</li>
                                    </ul>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Panel>
                                <Panel.Heading>
                                    <h3>Education</h3>
                                </Panel.Heading>
                                <Panel.Body>
                                    <ul>
                                        <li>
                                            <h4>University of Colorado Boulder</h4>
                                            <p>BA in Mathematics, comprehensive focus</p>
                                        </li>
                                        <li>
                                            <h4>Denver University Coding Bootcamp</h4>
                                            <p>Full Stack Web Development Program</p>
                                        </li>
                                    </ul>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={6}>
                    <Image id="ben" src={ben} alt="img not found" circle />
                </Col>
            </Row>
        </Grid>
    )
}

export default PersonalInformation
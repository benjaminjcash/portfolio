import React from "react";
import { Grid, Row, Col, Thumbnail, Image } from "react-bootstrap";
import homepage from "../../../images/g4g/homepage.gif";
import createevent from "../../../images/g4g/createevent.gif";
import g4glogo from "../../../images/g4g/gather-logo.png";
import "./Gather4Good.css";

export const Gather4Good = () => {
    return (
        <Grid>
            <Row>
                <Col className="title-info" sm={12} md={9}>
                    <h4 id="app-description">
                        Gather4Good is a web application for organizing protests, marches, and stand-ins to 
                        raise awareness for meaningful and relevant social issues. It was built using React,
                        Node.js, Express, MongoDB, and authentication using JWT. I worked with a team of four talented
                        developers to build the application. Click the logo to the right to visit the website, or check
                        out our repository on Github.
                    </h4>
                </Col>
                <Col className="title-info" sm={12} md={3}>
                    <a className="icons" href="https://github.com/ninjaginja/gather-4-good"><i className="fab fa-github fa-4x"></i></a>
                    <a className="icons" href="https://calm-taiga-53512.herokuapp.com/"><Image id="gather-logo" src={g4glogo} alt="img not found" rounded></Image></a>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Thumbnail src={homepage} alt="242x200"></Thumbnail>
                </Col>

                <Col xs={12} md={6}>
                    <Thumbnail src={createevent} alt="242x200"></Thumbnail>                    
                </Col>
            </Row>
        </Grid>
    )
}




import React from "react";
import { Grid, Row, Col, Panel, Thumbnail, Image, Jumbotron } from "react-bootstrap";
import homepage from "../../../images/g4g/homepage.gif";
import g4glogo from "../../../images/g4g/gather-logo.png";
import "./Gather4Good.css";

export const Gather4Good = () => {
    return (
        <Grid>
            <Row>
                
                <Col md={6}>
                    <Jumbotron id="g4gtitle">
                        <h1>Gather4Good</h1>
                        <p>Gather4Good is a web application for organizing protests, marches, and stand-ins to 
                        raise awareness for meaningful and relevant social issues. It was built using React,
                        Node.js, Express, MongoDB, and authentication using JWT. Click the logo below to visit the website, or check
                        out our repository on Github.</p>
                        <a href="https://calm-taiga-53512.herokuapp.com/"><Image id="info-gather-logo" src={g4glogo} alt="img not found" rounded></Image></a>
                        
                        <a href="https://github.com/ninjaginja/gather-4-good"><i className="fab fa-github fa-4x"></i></a>
                        
                    </Jumbotron>
                    <Panel>
                    </Panel>
                </Col>
                <Col md={6}>
                    <Thumbnail id="g4gprev-1" src={homepage} alt="242x200"></Thumbnail>
                </Col>
            </Row>
        </Grid>
    )
}




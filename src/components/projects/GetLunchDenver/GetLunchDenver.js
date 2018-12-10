import React from "react";
import { Grid, Row, Col, Thumbnail, Jumbotron, Panel, Image } from "react-bootstrap";
import search from "../../../images/fish/search.gif";
import lunchlogo from "../../../images/fish/lunch-logo.jpg";
import "./GetLunchDenver.css";

export const GetLunchDenver = () => {
    return (
        <Grid>
            <Row>
                <Col md={6}>
                    <Panel>
                        <Thumbnail id="lunchprev-1" src={search} alt="242x200"></Thumbnail>
                    </Panel>
                </Col>
                <Col md={6}>
                    <Jumbotron id="lunchtitle">
                        <h1 class="projtitle">Get lunch, Denver</h1>
                        <p>Get Lunch, Denver was built to make it easy for at-risk youth to access free meal sites during the summer in Denver, Colorado. It implements
                        the GoogleMaps API and USDA meal site data to allow users to search based on location to find meal sites in their area and display them on 
                        the map. It was built using JQuery, Firebase, and Bootstrap. Click the icon below to visit the website, or checkout the respository on github.</p>
                        <a className="icons" href="https://martinvicknair.github.io/fish/" target="_blank" rel="noopener noreferrer"><Image id="info-lunch-logo" src={lunchlogo} alt="img not found"></Image></a>
                        <a className="icons" href="https://github.com/martinvicknair/fish" target="_blank" rel="noopener noreferrer"><i className="gitlogo fab fa-github fa-4x"></i></a>
                    </Jumbotron>
                </Col>
            </Row>
        </Grid>
    )
}




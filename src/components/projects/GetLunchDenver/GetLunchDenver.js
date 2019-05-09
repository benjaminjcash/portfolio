import React from "react";
import { Grid, Row, Col, Thumbnail, Jumbotron, Image } from "react-bootstrap";
import search from "../../../images/fish/search.gif";
import lunchlogo from "../../../images/fish/lunch-logo.jpg";
import "./GetLunchDenver.css";

export const GetLunchDenver = () => {
  return (
    <Grid>
      <Row>
        <Col md={6} xs={12}>
          <Jumbotron id="lunchtitle">
              <h1 className="projtitle">Get Lunch, Denver</h1>
              <p>Get Lunch, Denver was built to make it easy for at-risk youth to access free meal sites during the summer in Denver, Colorado. It implements
              the GoogleMaps API and USDA meal site data to allow users to search based on location to find meal sites in their area and display them on 
              the map. It was built using Bootstrap, JQuery, and Firebase. Click the icon below to visit the website, or checkout the respository on Github.</p>
              <a className="icons" href="https://martinvicknair.github.io/fish/" target="_blank" rel="noopener noreferrer"><Image id="info-lunch-logo" src={lunchlogo} alt="img not found"></Image></a>
              <a className="icons" href="https://github.com/martinvicknair/fish" target="_blank" rel="noopener noreferrer"><i className="gitlogo fab fa-github fa-4x"></i></a>
          </Jumbotron>
        </Col>
        <Col md={6} xs={12}>
          <Thumbnail id="lunchprev-1" src={search} alt="242x200"></Thumbnail>
        </Col>
      </Row>
    </Grid>
  )
}




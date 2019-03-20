import React from "react";
import { Grid, Row, Col, Thumbnail, Jumbotron, Image } from "react-bootstrap";
import mistylightlogo from "../../../images/misty/misty-light-logo.png";
import misty2 from "../../../images/misty/misty-2.jpg";
import tutorial from "../../../images/misty/tutorial.gif";
import "./MistyRobotics.css";

export const MistyRobotics = () => {
  return (
    <Grid>
      <Row>
          <Col xs={12} md={6}>
              <Jumbotron id="mistytitle">
                  <h1 className="projtitle">Misty Robotics</h1>
                  <p>Misty Robotics is a venture-funded start up based out of Boulder, Colorado with the goal of putting a "personal robot in every household." In addition to writing a regression test suite and developing Misty's software, 
                    I worked on a small team to write a series of tutorials for users, published on the community website. Check out the link to the tutorials below, or visit the repository 
                    to see sample skill code.</p>
                  <a className="icons" href="https://docs.mistyrobotics.com/onboarding/creating-skills/writing-skill/" target="_blank" rel="noopener noreferrer">
                    <Image id="misty-light-logo" src={mistylightlogo} alt="img not found"></Image>
                  </a>
                  <a className="icons" href="https://github.com/MistyCommunity" target="_blank" rel="noopener noreferrer"><i className="gitlogo fab fa-github fa-4x"></i></a>
                  <Image id="misty-2" src={misty2} alt="img not found"></Image>
              </Jumbotron>
          </Col>
          <Col xs={12} md={6}>
            <Thumbnail id="tutorial-prev" src={tutorial} alt="242x200"></Thumbnail>
          </Col>
      </Row>
    </Grid>
  )
}
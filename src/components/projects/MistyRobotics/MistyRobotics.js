import React from "react";
import { Grid, Row, Col, Thumbnail, Jumbotron, Panel, Image } from "react-bootstrap";
import mistylogo from "../../../images/misty/misty-logo.jpg";
import "./MistyRobotics.css";

export const MistyRobotics = () => {
    return (
        <Grid>
            <Row>
                <Col md={6}>
                    <Jumbotron id="mistytitle">
                        <h1 class="projtitle">Misty Robotics</h1>
                        <p>Info here</p>
                    </Jumbotron>
                </Col>
				<Col md={6}>
                    <Panel>
						
                    </Panel>
                </Col>
            </Row>
        </Grid>
    )
}
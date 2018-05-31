import React from "react";
import { Col, Panel, Row } from "react-bootstrap";

export const Home = () => {
    return (
        <Row>
            <Col md={6}>
                <Panel>
                    <Panel.Heading id="home-panel-header">
                        <h3>Click the icons above to learn more about the projecs that I have worked on.</h3>
                    </Panel.Heading>
                </Panel>
            </Col>
        </Row>
    )
}

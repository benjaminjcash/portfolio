import React from "react";
import { Col, Panel, Row } from "react-bootstrap";

export const Home = () => {
    return (
        <Row>
            <Col md={6}>
                <Panel>
                    <Panel.Heading>
                        <i>Click the tabs above to see the projecs I have contributed to.</i>
                    </Panel.Heading>
                </Panel>
            </Col>
        </Row>
    )
}

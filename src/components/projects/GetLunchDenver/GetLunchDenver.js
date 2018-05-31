import React from "react";
import { Grid, Row, Col, Thumbnail } from "react-bootstrap";
import search from "../../../images/fish/search.gif";
import "./GetLunchDenver.css";

export const GetLunchDenver = () => {
    return (
        <Grid>
            <Row>
                <Col className="title-info" sm={12} md={9}>
                    <h4 id="app-description">
                        GetLunchDenver is an application for primary school aged children to find free meals sites that offer free food during the summer. We used
                        the GoogleMaps API and USDA meal site data to allow users to search based on location to find meal sites in their area and display them on 
                        the map. The application provides users with a convenient way to find free food nearby in an effort to fight hunger for at risk youth.
                    </h4>
                </Col>
                <Col className="title-info" sm={12} md={3}>
                    <a className="icons" href="https://github.com/martinvicknair/fish"><i className="fab fa-github fa-4x"></i></a>
                    <a className="icons" href="https://martinvicknair.github.io/fish/">GetLunchDenver</a>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={6}>
                    <Thumbnail src={search} alt="242x200"></Thumbnail>
                </Col>

                <Col xs={12} md={6}>
                    {/* <Thumbnail src={createevent} alt="242x200"></Thumbnail> */}
            </Col>
            </Row>
        </Grid>
    )
}




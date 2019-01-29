import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import { Container, Row, Col } from "react-bootstrap";

import apiKey from "../config";
import GoogleMap from "../components/GoogleMap";

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };
    render() {
        return (
            <Container>
                <Row className="col-lg-1 col-centered">
                    <GoogleMap
                        google={this.props.google}
                        onMarkerClick={this.onMarkerClick}
                        onInfoWindowClose={this.onInfoWindowClose}
                        selectedPlace={this.state.selectedPlace}
                    />
                </Row>
            </Container>
        );
    }
}

export default GoogleApiWrapper({
    apiKey
})(MapContainer);
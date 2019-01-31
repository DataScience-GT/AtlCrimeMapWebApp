import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

import apiKey from "../config";
import GoogleMap from "../components/GoogleMap";
import Grid from "@material-ui/core/Grid";

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };
    render() {
        return (
            <Grid
                container
                spacing={0}
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh" }}
            >
                <GoogleMap
                    google={this.props.google}
                    onMarkerClick={this.onMarkerClick}
                    onInfoWindowClose={this.onInfoWindowClose}
                    selectedPlace={this.state.selectedPlace}
                />
            </Grid>
        );
    }
}

export default GoogleApiWrapper({
    apiKey
})(MapContainer);
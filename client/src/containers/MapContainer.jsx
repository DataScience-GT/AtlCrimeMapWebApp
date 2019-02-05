import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';

import { mapsApiKey } from "../config";
import firebaseClient from "../utils/firebaseSetup";
import GoogleMap from "../components/GoogleMap";
import Grid from "@material-ui/core/Grid";

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        crimeData: [],
    };

    componentDidMount() {
        this.fetchFirestoreData()
    }

    async fetchFirestoreData() {
        // This function will asynchronously fetch crime data from Firestore
        // and filter out results with no coordinates. Should eventually be
        // replaced with a backend call
        let firestore = firebaseClient.firestore();
        let gtRef = firestore.collection("gt");
        let query = gtRef.orderBy("LocationCoordinates", "desc");
        let snapshot = await query.get();
        let crimeData = snapshot.docs.reduce((filtered, doc) => {
            let data = doc.data();
            if (data.LocationCoordinates) {
                filtered.push(data);
            }
            return filtered;
        }, []);
        this.setState({
            crimeData
        });
    }

    onMarkerClick = (props, marker) => {
        console.log(props, marker)
        this.setState({
            activeMarker: marker,
            selectedPlace: props,
            showingInfoWindow: true
        });
    }

    onInfoWindowClose = () => {
        this.setState({
            activeMarker: null,
            showingInfoWindow: false
        })
    }

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
                    crimeData={this.state.crimeData}
                    showingInfoWindow={this.state.showingInfoWindow}
                    activeMarker={this.state.activeMarker}
                />
            </Grid>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: mapsApiKey,
    libraries: ['visualization']
})(MapContainer);
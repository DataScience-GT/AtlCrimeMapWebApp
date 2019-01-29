import React from "react";
import { Map, InfoWindow, Marker } from 'google-maps-react';

const mapStyle = {
    width: "800px",
    height: "600px"
}

function GoogleMap(props) {
    let { google, onMarkerClick, onInfoWindowClose, selectedPlace } = props;
    return (
        <Map google={google} zoom={16} initialCenter={{
            lat: 33.7724,
            lng: -84.3947
        }}>
            <Marker onClick={onMarkerClick} name={"Current Location"} />
            <InfoWindow onClose={onInfoWindowClose}>
                <div>
                    <h1>{selectedPlace && selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    );
}

export default GoogleMap;
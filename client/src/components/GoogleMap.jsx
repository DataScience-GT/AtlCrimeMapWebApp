import React from "react";
import { Map, InfoWindow, Marker } from 'google-maps-react';

function GoogleMap(props) {
    let { google, onMarkerClick, onInfoWindowClose, selectedPlace, crimeData, activeMarker, showingInfoWindow } = props;

    const markers = crimeData.map((data, index) => {
        let { LocationCoordinates } = data;
        let coords = { lat: LocationCoordinates._lat, lng: LocationCoordinates._long };
        let offenseDesc = data["Offense Description"]
        let date = `${data.IncidentFromDate}, ${data.IncidentFromTime} - ${data.IncidentToDate}, ${data.IncidentToTime}`
        return (
            <Marker
                name={offenseDesc}
                date={date}
                position={coords}
                key={index + offenseDesc + coords.lat + coords.lng}
                onClick={onMarkerClick}
            />
        );
    });

    return (
        <Map google={google} zoom={16} initialCenter={{
            lat: 33.7756,
            lng: -84.3963
        }}>
            {markers}
            <InfoWindow
                marker={activeMarker}
                onClose={onInfoWindowClose}
                visible={showingInfoWindow}
            >
                <div>
                    <h2>{selectedPlace.name}</h2>
                    <p>{selectedPlace.date}</p>
                </div>
            </InfoWindow>
        </Map>
    );
}

export default GoogleMap;
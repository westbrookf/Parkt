import React, { Component } from 'react'
import {compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, google, lifecycle, DirectionsRenderer, Polyline} from 'react-google-maps'
import MapStyles from '../map-styles/MapStyles';

import '../googlemap/MapStyles.scss';

const MapView = compose(
        withProps({
        googleMapURL: "`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%`}} />,
        containerElement: <div style={{ height: `100vh`}} />,
        mapElement: <div style={{ height: `100%`}} />,
    }),
    withScriptjs,withGoogleMap, )((props) =>
    <GoogleMap 
        defaultZoom={18}
        defaultCenter={{ lat: props.currentLocation.lat,lng: props.currentLocation.lng }}
        defaultOptions={{
            // styles: MapStyles,
            streetViewControl: false,
            scaleControl: true,
            mapTypeControl: false,
            panControl: true,
            zoomControl: true,
            // rotateControl: false,
            fullscreenControl: false
        }}
    >
        {props.isMarkerShown && <Marker 
        position={{lat: props.currentLocation.lat, lng: props.currentLocation.lng}} 
        onClick={props.onMarkerClick} 
        icon="https://www.robotwoods.com/dev/misc/bluecircle.png"
        scaledSize={new window.google.maps.Size(45,45)}
        // animation={window.google.maps.Animation.BOUNCE}
        />}

        <Polyline
                path={[{ lat: -34.397, lng: 150.644 }, { lat: -35.397, lng: 151.644 }]}
                geodesic={true}
                options={{
                    strokeColor: "#ff2527",
                    strokeOpacity: 0.75,
                    strokeWeight: 2
                }}
        />
    </GoogleMap>
)
{/* <MapView /> */}
export default MapView
import React from 'react'
import {compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'


import mapMarker from '../../icons/mainMarker.svg';
import '../googlemap/MapStyles.scss';
import MapStyles from'../map-styles/MapStyles';


const MapView = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCgcw6lYTsPaIsHgeqvuXgbBZ-dwgbfUOI",
        loadingElement: <div style={{ height: `100%`}} />,
        containerElement: <div style={{ height: `100vh`}} />,
        mapElement: <div style={{ height: `100%`}} />,
    }),
    withScriptjs,withGoogleMap)((props) => 
        <GoogleMap 
            defaultZoom={16}
            defaultCenter={{ lat: props.currentLocation.lat,lng: props.currentLocation.lng }}
            defaultOptions={{
                // styles: MapStyles,
                streetViewControl: false,
                scaleControl: true,
                mapTypeControl: false,
                panControl: true,
                zoomControl: false,
                // rotateControl: false,
                fullscreenControl: false
            }}
        >  
            {props.isMarkerShown && <Marker 
                position={{lat: props.currentLocation.lat, lng: props.currentLocation.lng}} 
                onClick={props.onMarkerClick} 
                // icon= {mapMarker}
            />}
            {/* <Polyline path={[{ lat: -34.397, lng: 150.644 }, { lat: -35.397, lng: 151.644 }]}/> */}

        </GoogleMap>
    
)
export default MapView

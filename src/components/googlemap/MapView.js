import React from 'react'
import {compose, withProps } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer} from 'react-google-maps'
import MarkerSvg from './MarkerSvg';
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
        // icon= 
         />}
    </GoogleMap>
    
)
export default MapView

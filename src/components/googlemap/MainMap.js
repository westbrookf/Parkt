import React, { Component }from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MapWrapper from './MapView';
import MapStyles from '../map-styles/MapStyles';
import axios from 'axios';
import ParkedBtn from '../parked-btn/ParkedBtn';

class MainMap extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentLatLng: {
                lat: '',
                lng: ''
            },
            isMarkerShown: false
        }
    }
    componentWillUpdate(){
        this.getGeoLocation()
    }
    componentDidMount(){
        this.delayedShowMarker()
    }
    delayedShowMarker = () => {
        setTimeout(() => {
            this.getGeoLocation()
            this.setState({ isMarkerShown: true })
        }, 0)
    }
    handleMarkerClick = () => {
        this.setState({ isMarkerShown: false })
        this.delayedShowMarker()
    }
    getGeoLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    console.log("Get GeoLocation",position.coords);
                    let currentLatLng= {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    }

                    this.setState(
                    {
                        currentLatLng:currentLatLng
                    }
                    )

                }
            )
        } else {
            console.log('error loading maps')
        }
        
    }
    render() {
        return(
            <React.Fragment>
                <MapWrapper 
                    isMarkerShown={this.state.isMarkerShown}
                    onMarkerClick={this.handleMarkerClick}
                    currentLocation={this.state.currentLatLng}
                 />
                <ParkedBtn currentLocation={this.state.currentLatLng} />
            </React.Fragment>
        )
    }
}
export default MainMap;
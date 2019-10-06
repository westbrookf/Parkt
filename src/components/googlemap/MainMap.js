import React, { Component }from 'react';
import MapView from './MapView';
import LocateMap from '../locatemap/LocateMap';
import ParkedBtn from '../parked-btn/ParkedBtn';
import MarkerSvg from './MarkerSvg';

class MainMap extends Component {

    // async componentDidMount() {
    //     const { status } = await Permissions.getAsync(Permissions.LOCATION)
    //     if(status != 'granted') {
    //         const response = await PermissionRequest.askAsync(Permissions.LOCATION)
    //     }
    // }

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
                    // console.log("Get GeoLocation",position.coords);
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
                <MapView
                    // googleMapURL= "https://maps.googleapis.com/maps/api/js?key=AIzaSyCgcw6lYTsPaIsHgeqvuXgbBZ-dwgbfUOI"
                    isMarkerShown={this.state.isMarkerShown}
                    // onMarkerClick={this.handleMarkerClick}
                    currentLocation={this.state.currentLatLng}
                 />

                 {/* <LocateMap /> */}
                  
                <ParkedBtn currentLocation={this.state.currentLatLng} />

            </React.Fragment>
        )
    }
}
export default MainMap;
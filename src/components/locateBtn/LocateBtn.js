import  React, { Component } from 'react';
import '../parked-btn/ParkedStyles.scss';
import  { Button, Dialog, DialogTitle, DialogContent, DialogActions}  from 'react-mdl';
import MainMap from '../googlemap/MainMap';
import axios from 'axios';


import { compose, withProps, lifecycle } from 'recompose';
import { google,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';

class ParkedBtn extends Component {
  state={
    user:{},
    savedLocation:{}
  }
//   componentWillUpdate(){
//     this.getGeoLocation();
// }
  componentDidMount(){
    // this.getGeoLocation();
    const loggedInUser = 
    JSON.parse(localStorage.getItem('loggedInUser'));
  
    this.setState(
        {
            user:loggedInUser
        }
    )
}
handleShowDirections = () =>{
  const MapWithADirectionsRenderer = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap,
    lifecycle({
      componentDidMount() {
        const DirectionsService = new google.maps.DirectionsService();
  
        DirectionsService.route({
          origin: new google.maps.LatLng(41.8507300, -87.6512600),
          destination: this.state.savedLocation ,
          travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result,
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        });
      }
    })
  )(props =>
    <GoogleMap
      defaultZoom={7}
      defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
    >
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  );
  
  // <MapWithADirectionsRenderer />
}



  render() {
    return ( 
        <div className="btn-container">
         <Button className="global-btn-style" accent ripple colored raised ripple className="opn-modal-btn global-btn-style" onClick={this.handleShowDirections}>
            Locate
         </Button>
        </div>
    )
  }
}

export default ParkedBtn;


//EXAMPLE CODE FOR LATER WHEN YOUR AT HOME
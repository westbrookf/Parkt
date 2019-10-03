import React from "react";
import ReactDOM from "react-dom";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Polyline
} from "react-google-maps";

const LocateMap = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyDVT7Xr5Y8fzM8punj8rix00HjvJnC9KDQ&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={7} defaultCenter={{ lat: -34.897, lng: 151.144 }}>
    <Polyline path={[{ lat: -34.397, lng: 150.644 }, { lat: -35.397, lng: 151.644 }]}/>
  </GoogleMap>
));

    // ReactDOM.render(<LocateMap />, document.getElementById("root"));
    export default LocateMap;








// import React, {Component} from 'react'
// import {compose, withProps } from 'recompose'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline} from 'react-google-maps'
// import mapMarker from '../../icons/mainMarker.svg';
// import '../googlemap/MapStyles.scss';
// import MapStyles from'../map-styles/MapStyles';


// const LocateMap = compose(
//         withProps({
//         googleMapURL: "`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//         loadingElement: <div style={{ height: `100%`}} />,
//         containerElement: <div style={{ height: `100vh`}} />,
//         mapElement: <div style={{ height: `100%`}} />,
//         }),
//     withScriptjs,withGoogleMap, )((props) =>
//     <GoogleMap 
//         defaultZoom={26}
//         defaultCenter={{ lat: props.currentLocation.lat,lng: props.currentLocation.lng }}
//         defaultOptions={{
//             // styles: MapStyles,
//             streetViewControl: false,
//             scaleControl: true,
//             mapTypeControl: false,
//             panControl: true,
//             zoomControl: false,
//             // rotateControl: false,
//             fullscreenControl: false
//         }}
//     >
//         {props.isMarkerShown && <Marker 
//         position={{lat: props.currentLocation.lat, lng: props.currentLocation.lng}} 
//         onClick={props.onMarkerClick} 
//         // icon= {mapMarker}
//          />}
//              <Polyline geodesic= {true}
//                        options = {{
//                            path:[{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }, { lat: 38.7319204, lng: -90.3484616 }],
//                            strokeColor: '#007bff',
//                             strokeWeight: 6,
//                             strokeOpacity: 1
//                         }}
//              />

//     </GoogleMap>
    
// )
// export default LocateMap




// import React from 'react'
// import {compose, withProps, lifecycle } from 'recompose'
// import { google, withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
// // import mapMarker from '../../icons/mainMarker.svg';
// import '../googlemap/MapStyles.scss';
// // import MapStyles from'../map-styles/MapStyles';


// const LocateMap = compose(
//     withProps({
//       googleMapURL: "`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
//       loadingElement: <div style={{ height: `100%` }} />,
//       containerElement: <div style={{ height: `100vh` }} />,
//       mapElement: <div style={{ height: `100%` }} />,
//     }),
//     withScriptjs,
//     withGoogleMap,((props) =>
//     lifecycle({
//       componentDidMount() {
//         const DirectionsService = new google.maps.DirectionsService();

//         DirectionsService.route({
//           origin: new google.maps.LatLng(38.6876176, -90.3251358),
//           destination: new google.maps.LatLng(29.7392, -87.6514100),
//           travelMode: google.maps.TravelMode.WALKING,
//         }, (result, status) => {
//           if (status === google.maps.DirectionsStatus.OK) {
//             this.setState({
//               directions: result,
//             });
//           } else {
//             console.error(`error fetching directions ${result}`);
//           }
//         });
//       }
//     })
//   )(props =>
//     <GoogleMap
//       defaultZoom={7}
//     //   defaultCenter={new google.maps.LatLng(41.8507300, -87.6512600)}
//     >
//       {props.directions && <DirectionsRenderer directions={props.directions} />}
//     </GoogleMap>
//   )
// );
//   export default LocateMap;









/*global google*/ 
// import React, { Component } from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   DirectionsRenderer
// } from "react-google-maps";
// class LocateMap extends Component {

//   state={
//     directions:null,
//     user:{},
//     savedLocation:{
//         lat: '',
//         lng: ''
//     }
//   }


//   componentWillUpdate(){
//     this.getGeoLocation();
//   }
 
//   getGeoLocation = () => {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             position => {
//                 console.log("Get GeoLocation",position.coords);
//                 let currentLatLng= {...this.state.currentLocate};
                
              
//                 currentLatLng.lat= position.coords.latitude;
//                 currentLatLng.lng= position.coords.longitude;
                
  
//                 this.setState(
//                 {
//                   currentLocate:currentLatLng
//                 }
//                 )
  
//             }
//         )
//     } else {
//         console.log('error loading maps')
//     }
    
//   }
  
//   componentDidMount() {
//     // this.getGeoLocation();
//     const loggedInUser = 
//       JSON.parse(localStorage.getItem('loggedInUser'));
  
//     this.setState(
//       {
//         user:loggedInUser
            
//       }
//     );

//     const directionsService = new 
//     window.google.maps.DirectionsService();
    
//     // const origin = { lat: currentLatLng.lat, lng: currentLatLng.lng };
//     const destination = { lat: this.state.savedLocation.lat, lng: this.state.savedLocation.lng };

//     directionsService.route(
//       {
//         origin: origin,
//         destination: destination,
//         travelMode: google.maps.TravelMode.WALKING
//       },
//       (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           this.setState({
//             directions: result
//           });
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       }
//     );
//   }

//   render() {
//     const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//         // defaultCenter={{ lat: this.state.currentLocate.lat,lng: this.state.currentLocate.lng }}
//         defaultZoom={8}
//         defaultOptions={{
//             // styles: MapStyles,
//             streetViewControl: true,
//             scaleControl: true,
//             mapTypeControl: false,
//             panControl: true,
//             zoomControl: true,
//             // rotateControl: false,
//             fullscreenControl: false
//         }}
//       >
//         <DirectionsRenderer
//           directions={this.state.directions}
//         />
//       </GoogleMap>
//     ));

//     return (
//       <div>
//         <GoogleMapExample
//           // googleMapURL= {"`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"}
//           // loadingElement={ <div style={{ height: `100%`} /> }
//           containerElement={<div style={{ height: `500px`, width: "500px" }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//         />
//       </div>
//     );
//   }
// }

// export default LocateMap;
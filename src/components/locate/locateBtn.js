import  React, { Component } from 'react';
import '../parked-btn/ParkedStyles.scss';
import  { Button, Dialog, DialogTitle, DialogContent, DialogActions}  from 'react-mdl';
import MainMap from '../googlemap/MainMap';
import axios from 'axios';

import '../locate/LocateStyle.scss';
import { compose, withProps, lifecycle } from 'recompose';
import { google,
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';

class locateBtn extends Component {
    componentDidMout(){
    this.mapRender()
  }
  mapRender = () => {
    loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBwsoNj-j5kEQ5YAp-u1Zksi-N4tguw0IU")
    window.initMap = this.initMap
  }

  initMap = () => {

    // Create A Map
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    })

    // Create An InfoWindow
    var infowindow = new window.google.maps.InfoWindow()

    // Display Dynamic Markers
    this.state.venues.map(myVenue => {

      var contentString = `${myVenue.venue.name}`

      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: {lat: myVenue.venue.location.lat , lng: myVenue.venue.location.lng},
        map: map,
        title: myVenue.venue.name
      })

      // Click on A Marker!
      marker.addListener('click', function() {

        // Change the content
        infowindow.setContent(contentString)

        // Open An InfoWindow
        infowindow.open(map, marker)
      })

    })

    

  }

  render() {
    return (
      <main>
        <div id="map"></div>
      </main>
    )
  }
}

function loadScript(url) {
  var index  = window.document.getElementsByTagName("script")[0]
  var script = window.document.createElement("script")
  script.src = url
  script.async = true
  script.defer = true
  index.parentNode.insertBefore(script, index)
}
export default locateBtn;


// //EXAMPLE CODE FOR LATER WHEN YOUR AT HOME
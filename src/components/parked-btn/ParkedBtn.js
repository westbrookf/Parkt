import  React, { Component } from 'react';

import { props } from 'recompose';

//TOOLS
import  { Button, Dialog, DialogTitle, DialogContent, DialogActions}  from 'react-mdl';
import axios from 'axios';
import { compose, withProps, lifecycle } from 'recompose';
import { google, withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker
} from 'react-google-maps';

//Component Imports
import MainMap from '../googlemap/MainMap';
import HelpWidget from '../helpwidget/HelpWidget';
import LocateBtn from '../locateBtn/LocateBtn';

//Component SCSS
import '../parked-btn/ParkedStyles.scss';


class ParkedBtn extends Component {
  state={
    user:{},
    savedLocation:{
        email: '',
        floor: '',
        lat: '',
        lng: ''
    }
  }
  componentWillUpdate(){
    this.getGeoLocation();
  }
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
  getGeoLocation = () => {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          position => {
              console.log("Get GeoLocation",position.coords);
              let currentLatLng= {...this.state.savedLocation};
              
            
              currentLatLng.lat= position.coords.latitude;
              currentLatLng.lng= position.coords.longitude;
              

              this.setState(
              {
                savedLocation:currentLatLng
              }
              )

          }
      )
  } else {
      console.log('error loading maps')
  }
  
  }

  floorChangeHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    let tempLoc = {...this.state.savedLocation};
    tempLoc[key] = value;

    this.setState({
      savedLocation:tempLoc
    })
  }


  parkedCarSubmitHandler = (event) =>{
     event.preventDefault();
     let location= {...this.state.savedLocation}
    location.user = this.state.user.email;
     console.log("park submit with data: ", location);

    axios.post('http://localhost:8080/parkedCar',location)
      .then(response =>{
        const userParkInfo = response.data;
        localStorage.setItem("parkedUser", JSON.stringify(userParkInfo));
        this.handleCloseDialog();
      })
   
  }
  constructor(props) {
    super(props);
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    let tempLoc = {...this.state.savedLocation};
    tempLoc.floor = '';

    this.setState({
      savedLocation:tempLoc,
      openDialog: false
    });

  }
  calculatRoute(){
  }
  //GET DIRECTIONS TO VEHICLE
          showDirections = () =>{
            console.log("directions", this.calculatRoute())
            this.calculatRoute();
          }

  render() {
    const parkedUser = localStorage.getItem("parkedUser");
      let locateButton = null;
      let parkButton=(
        <Button className="global-btn-style" accent ripple colored raised ripple className="opn-modal-btn global-btn-style" onClick={this.handleOpenDialog}>Park</Button>
      )
      if (parkedUser){
        parkButton = null;
        locateButton = (
          <Button className="global-btn-style" accent ripple colored raised ripple onClick={this.showDirections}>locate</Button>
        )
      }
    return ( 
        <div className="btn-container">
        {parkButton}
        {locateButton}
          {/* <Button className="global-btn-style" accent ripple colored raised ripple className="opn-modal-btn global-btn-style" onClick={this.handleOpenDialog}>Park</Button> */}
          <Dialog className="floor-modal-container" open={this.state.openDialog}>
            <DialogTitle className="floor-modal-title">
              <span className="d-title">is this a parking garage?</span>
            </DialogTitle>
            <DialogContent className="floor-modal-form-container">
                <form  className="floor-form" onSubmit={this.parkedCarSubmitHandler}>
                  <div className="floor-level-input-container">
                    <label htmlFor="floor" className="floor-level-label"><strong>floor #</strong></label>
                    <div className="widget-container">
                      <input className="floor-level-input" value={this.state.savedLocation.floor} name="floor" onChange={this.floorChangeHandler} type="text"/>
                      <HelpWidget />
                    </div>
                  </div>
                  <div className="floor-submit-btn-container">
                    <Button accent ripple colored raised ripple type="submit" className="floor-submit-btn global-btn-style" onClick={this.toggleLocate}>done</Button>
                  </div>
                </form>
            </DialogContent>
          </Dialog>
        </div>
    )
  }
}

export default ParkedBtn;
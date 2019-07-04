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

class LocateBtn extends Component {




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

export default LocateBtn;


// //EXAMPLE CODE FOR LATER WHEN YOUR AT HOME
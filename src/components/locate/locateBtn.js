import  React, { Component } from 'react';
import '../parked-btn/ParkedStyles.scss';
import  { Button, Dialog, DialogTitle, DialogContent, DialogActions}  from 'react-mdl';
import MainMap from '../googlemap/MainMap';
import LocateMap from '../locatemap/LocateMap';

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
  openLocateMap =  () => {
    const locateMap = {LocateMap};    
    const mainMap = {MainMap};

    mainMap= null;
    locateMap= true;
  }  

  render() {
    return (
      <div>
        <Button className="global-btn-style" accent ripple colored raised ripple className="opn-modal-btn global-btn-style" onClick={this.openLocateMap.bind(this)}>Locate</Button>
      </div>
    )
  }
}


export default locateBtn;


// //EXAMPLE CODE FOR LATER WHEN YOUR AT HOME
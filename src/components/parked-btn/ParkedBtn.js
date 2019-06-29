import  React, { Component } from 'react';
import '../parked-btn/ParkedStyles.scss';
import  { Button, Dialog, DialogTitle, DialogContent, DialogActions}  from 'react-mdl';
import MainMap from '../googlemap/MainMap';
import axios from 'axios';

class ParkedBtn extends Component {
  state={
    savedLocation:{
        email: '',
        floor: '',
        lat: this.props.currentLocation.lat,
        lng: this.props.currentLocation.lng
    }
  }

  floorChangeHandler = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    let tempLoc = {...this.state.location};
    tempLoc[key] = value;

    this.setState({
      location:tempLoc
    })
  }


  parkedCarSubmitHandler = (event) =>{
    // event.preventDefault();
    axios.post('localhost:8080/parkedCar',this.savedLocation)
      .then(response =>{
        
      })
  }
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }
  render() {
    return ( 
        <div className="btn-container">
         <Button className="global-btn-style" accent ripple colored raised ripple className="opn-modal-btn global-btn-style" onClick={this.handleOpenDialog}>Park</Button>
          <Dialog className="floor-modal-container" open={this.state.openDialog}>
            <DialogTitle className="floor-modal-title">
              <h3 className="d-title">is this a parking garage?</h3>
            </DialogTitle>
            <DialogContent className="floor-modal-form-container">
                <form  className="floor-form" onSubmit={this.parkedCarSubmitHandler}>
                  <div className="hidden-inputs">
                    <input className="lat-input" name="lat" onChange={this.floorChangeHanlder} value={this.props.currentLocation.lat} type="text"></input>
                    <input className="lng-input" name="lng" onChange={this.floorChangeHandler} value={ this.props.currentLocation.lng} type="text" />
                  </div>
                  <div className="floor-level-input-container">
                    <label for="floor" className="floor-level-label"><strong>floor #</strong></label>
                    <input className="floor-level-input" name="floor" onChange={this.floorChangeHandler} type="text"/>
                  </div>
                  <div className="floor-submit-btn-container">
                    <Button accent ripple colored raised ripple className="floor-submit-btn global-btn-style" onClick={this.handleCloseDialog}>done</Button>
                  </div>
                </form>
            </DialogContent>
          </Dialog>
        </div>
    )
  }
}

export default ParkedBtn;
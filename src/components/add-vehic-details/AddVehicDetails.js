import React, { Component } from 'react';
import VehicleItem from '../vehicle-item/VehicleItem';
import axios from 'axios';
import  { Button, Dialog, DialogTitle, DialogContent, DialogActions}  from 'react-mdl';

class AddVehicDetails extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         vehicle: {
    //             year: '',
    //             make: '',
    //             model: '',
    //             color: ''
    //         }
    //     }
    // }
    
        // vehicles:[], 
        state={
        vehicles: [],
        vehicle:{
            year: '',
            make: '',
            model: '',
            color: ''
        }
    }
    constructor(props) {
        super(props);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
    }
    //Open Modal Handler
      handleOpenDialog() {
        this.setState({
          openDialog: true
        });
      }
    //Close Modal Handler
      handleCloseDialog() {
        this.setState({
          openDialog: false,
        
        });
      }
    //   //Input onChange handler
    handleChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        let tempVehic = {...this.state.vehicle};
        tempVehic[key] = value;

        this.setState({
            vehicle:tempVehic
        })
    }
    parkedCarSubmitHandler = (event) => {
        // event.preventDefault();
        axios.post('http://localhost:8080/submitNewVehicle', this.state.vehicle)
        .then((response) => {
            this.props.history.push('thank-you');
        }).catch((error) => {
            //Handle error here
        })
    }
    
    render() {
        return (
            <div>
                <VehicleItem vehicles={this.state.vehicles} delVehicle={this.delVehicle} />
                <Button className="global-btn-style" accent ripple colored raised ripple className="opn-modal-btn global-btn-style" onClick={this.handleOpenDialog}>add</Button>
                <Dialog className="vehicle-modal-container" open={this.state.openDialog}>
                    <DialogTitle className="vehicle-modal-title">
                        <h3 className="vehicle-title">add a new vehicle</h3>
                    </DialogTitle>
                    <DialogContent className="vehicle-modal-form-container">
                        <form  className="vehicle-form" onSubmit={this.parkedCarSubmitHandler}>
                            <div>
                                <label for="year">year</label>
                                <input name="year" type="text" value={this.state.vehicle.year} onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label for="make">make</label>
                                <input name="make" type="text"  value={this.state.vehicle.make} onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label for="model">model</label>
                                <input name="model" type="text"  value={this.state.vehicle.model} onChange={this.handleChange}/>
                            </div>
                            <div>
                                <label for="color">color</label>
                                <input name="color" type="text"  value={this.state.vehicle.color} onChange={this.handleChange}/>
                            </div>
                            <div className="floor-submit-btn-container">
                                <Button accent ripple colored raised ripple className="floor-submit-btn global-btn-style" type="submit">done</Button>
                            </div>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

export default AddVehicDetails;
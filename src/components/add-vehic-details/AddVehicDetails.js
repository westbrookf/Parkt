import React, { Component } from 'react';
import VehicleItem from '../vehicle-item/VehicleItem';
import axios from 'axios';
import  { Button, Dialog, DialogTitle, DialogContent, DialogActions}  from 'react-mdl';

class AddVehicDetails extends Component {
    state={
        user:{},
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
    vehicleDetailSubmitHandler = (event) => {
        event.preventDefault();
        let vehicle = {...this.state.vehicle};
        vehicle.user = this.state.user.email;
        console.log("submit vehicle details with data: ", vehicle);
        axios.post('http://localhost:8080/submitNewVehicle', vehicle)
        .then((response) => {
            const userVehicleDetails = response.data;
            localStorage.setItem("vehicleDetails", JSON.stringify(userVehicleDetails));
        }).catch((error) => {
            //Handle error here
        })
        this.handleCloseDialog();
    }
    
    render() {
        const userVehicle = localStorage.getItem("vehicleInfo");
        
        let addBtn = (
            <Button className="global-btn-style" accent ripple colored raised ripple className="opn-modal-btn global-btn-style" onClick={this.handleOpenDialog}>add</Button>
        )
        // if(userVehicle != null){
        //     addBtn = null;
        // }
        return (
            <div>
                <VehicleItem />
                {addBtn}
                <Dialog className="vehicle-modal-container" open={this.state.openDialog}>
                <DialogTitle className="vehicle-modal-title">
                    <p className="vehicle-title">add a new vehicle</p>
                </DialogTitle>
                <DialogContent className="vehicle-modal-form-container">
                    <form  className="vehicle-form" onSubmit={this.vehicleDetailSubmitHandler}>
                        <div>
                            <label htmlFor="year">year</label>
                            <input name="year" type="text" value={this.state.vehicle.year} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="make">make</label>
                            <input name="make" type="text"  value={this.state.vehicle.make} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="model">model</label>
                            <input name="model" type="text"  value={this.state.vehicle.model} onChange={this.handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="color">color</label>
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
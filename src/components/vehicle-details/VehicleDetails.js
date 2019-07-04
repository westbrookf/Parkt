//THIS COMPONENT WILL BE RENDERING THE DETAIL LIST AND ADD DETAILS BTN

import React, { Component } from 'react';
import VehicleItem from '../vehicle-item/VehicleItem';
import AddVehicDetails from '../add-vehic-details/AddVehicDetails';
import axios from 'axios';
import  { Button, Dialog, DialogTitle, DialogContent, DialogActions}  from 'react-mdl';
import { Table } from 'reactstrap';

//Component CSS
import '../vehicle-details/VehicleDetailsStyle.scss';

class VehicleDetails extends Component {


    // componentWillMount() {
    //     // event.preventDefault();
    //     axios.post('http://localhost:8080/submitVehicleDetails', this.state.vehicleDetail)
    //     .then((response) => {
    //        this.setState({
    //            vehicle: response.data
    //        })
    //     }).catch((error) => {
    //         //Handle error here
    //     })
    // }
    
    render() {
        return (
            <div className="vehic-details-container">
                <div className="vehic-details-header-container">
                    <div className="logo"></div>
                    <div className="close-btn">X</div>
                </div>
                <AddVehicDetails />
            </div>
        );
    }
}

export default VehicleDetails;
//VEHICLE LIST COMPONENT

import React, {Component}  from 'react';
import propTypes from 'prop-types';

class VehicleItem extends Component{
    state={
        user:{},
        year: '',
        make: '',
        model: '',
        color: ''
    }

    componentDidMount(){
        const loggedInUser = 
        JSON.parse(localStorage.getItem('loggedInUser'));

        this.setState(
            {
                user:loggedInUser
            }
        );
    }

    render() {
        return(
            <div className="userVehicleContainer">
                <div className="vehicleColor">{ this.state.color }</div>
                
            </div>
        );
    }
}

export default VehicleItem;
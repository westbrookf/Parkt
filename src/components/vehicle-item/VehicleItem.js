//VEHICLE LIST COMPONENT

import React from 'react';
import propTypes from 'prop-types';


const VehicleItem =(props) => {
    // const {id, year,make,model,color} = this.state.vehicles;
    return (
        <div className="vehicle-component-container">
            <div className="vehicle-item-container">
                <div className="vehicle-color" ></div>
                <div className="vehicle-details">
                    {/* <li key={index}>
                        {vehicle}
                    </li> */}
                </div>
                {/* <button onClick={this.props.delTodo.bind(this, id)} >x</button> */}
            </div>
        </div>
    );
}

//PropTypes
// VehicleItem.propTypes = {
//     vehicles: propTypes.object.isRequired
//   }
// const btnStyle = {
//     background: '#ff0000',
//     color: '#fff',
//     border: 'none',
//     marginTop: '-5px',
//     padding: '10px 12px',
//     borderRadius: '50%',
//     cursor: 'pointer',
//     float: 'right',
//     fontSize: '14px'
// }
export default VehicleItem;
import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import SignOut from '../sign-out/SignOut';
import '../nav-menu/NavMenuStyle.scss';
import { IconButton, Menu, MenuItem } from 'react-mdl';
 

class NavMenu extends Component {
   
  render() {
    return ( 
        <div>
            <div className="opn-nav-btn-container">
                <IconButton id="opn-nav-btn" name="more_vert" id="demo-menu-lower-right" />
            </div>
            <Menu target="demo-menu-lower-right" align="right">
                {/* <MenuItem className="nav-link-item vehicle-dets-link"><Link to="/VehicleDetails">vehicle details</Link></MenuItem>
                <MenuItem className="nav-link-item park-his-link"><Link to="">parking history</Link></MenuItem> */}
                <MenuItem className="nav-link-item about-us-link"><Link to="/about-us">about us</Link></MenuItem>
                <MenuItem>< SignOut {...this.props}  /></MenuItem>
            </Menu>
        </div>
    )
  }
}

export default NavMenu;
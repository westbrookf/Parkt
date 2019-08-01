import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import WelcomeUserT from '../welcomeUserTitle/WelcomeUserT';
import NavMenu from '../nav-menu/NavMenu';

import '../header/HeaderStyle.scss';
 class Header extends Component {
  render() {
    return ( 
        <div className="header-container">
            <header className="main-header">
              {/* < WelcomeUserT /> */}
              <Link className="header-logo" to="/home" />
              < NavMenu {...this.props} />
            </header>
        </div>
    )
  }
}

export default Header;
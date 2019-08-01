import React, { Component } from 'react';

//TOOLS IMPORT 
import { Route, withRouter } from 'react-router-dom';

//COMPONENTS IMPORTS 
import LandingWelcome from '../../components/typography/LandingWelcome';
import ThankYou from '../thank-you-page/ThankYou';
import AboutUs from '../about-us/AboutUs';
import Home from '../home/Home';
import VehicleDetails from '../vehicle-details/VehicleDetails';
// import Locate from '../locate/Locate';

class Layout extends Component {
    render() {
        const loggedInUser = localStorage.getItem('loggedInUser');
        let routes = (
            //Specifies the unauthenticated user
            <React.Fragment>
                <Route exact path='/' render={(props) => <LandingWelcome {...props} />}/>
                <Route exact path='/landing-welcome' render={(props) => <LandingWelcome {...props} />} />
                <Route exact path='/thank-you' component= {ThankYou} />                
            </React.Fragment>
        )
        if(loggedInUser) {
            routes = (
                <React.Fragment>
                    <Route exact path='/' render={(props) => <Home {...props} />}/>
                    <Route exact path='/home' render={(props) => <Home {...props} />}/>
                </React.Fragment>
            )
        }
        return (
            <div>

                {routes}
                <Route exact path='/about-us' component={AboutUs} />
                <Route exact path='/VehicleDetails' component={VehicleDetails} />
                {/* <Route eaxct path ='/Locate' component={Locate} /> */}
            </div>
        );
    }
}

export default withRouter(Layout);
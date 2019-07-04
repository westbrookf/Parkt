import React, { Component } from 'react';
import Login from '../login/Login';
import SignUp from '../sign-up/SignUp';
import LandingWelcome from '../../components/typography/LandingWelcome';
import { Route, withRouter } from 'react-router-dom';
import ThankYou from '../thank-you-page/ThankYou';
import AboutUs from '../about-us/AboutUs';
import Home from '../home/Home';
import VehicleDetails from '../vehicle-details/VehicleDetails';

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
            </div>
        );
    }
}

export default withRouter(Layout);
import React, { Component } from 'react';
import SignUp from '../sign-up/SignUp';
import SignIn from '../sign-in/SignIn';

//Component CSS
import '../typography/LandingStyle.scss';

//Global CSS
import '../../styles/scss/globalStyles/GlobalStyles.scss';

class LandingWelcome extends Component {
    render() {
        return(
            <div className="welcome-container">
                <div className="text-container" >
                    <div className="company-logo"></div>
                    <div className="landing-btn-container" >
                        < SignUp />
                        < SignIn {...this.props} /> 
                    </div>
                </div>
            </div>
        )
    }
}


export default LandingWelcome;
import React, { Component } from 'react';
import SignUp from '../sign-up/SignUp';
import Login from '../login/Login';
import { Button } from 'react-mdl';

//Component CSS
import '../typography/LandingStyle.scss';

//Global CSS
import '../../styles/scss/globalStyles/GlobalStyles.scss';

class LandingWelcome extends Component {
    openSignUp = () => {
        const signUpFormContainer = document.querySelector('.sign-up-form-style');
        signUpFormContainer.style.transitionDuration = '.5s';
        signUpFormContainer.style.opacity = '1';
        signUpFormContainer.style.transform = 'scale(1)';
        const welcomeContainer = document.querySelector('.text-container');
        welcomeContainer.style.display = "none";
    }
    openLogIn = () => {
        const signInFormContainer = document.querySelector('.landing-login');
        signInFormContainer.style.transitionDuration = '.5s';
        signInFormContainer.style.opacity = '1';
        signInFormContainer.style.transform = 'scale(1)';
        const welcomeContainer = document.querySelector('.text-container');
        welcomeContainer.style.display = "none";
    }
    render() {
        return(
            <div className="welcome-container">
                <div className="text-container" >
                    <div className="company-logo"></div>
                    <div className="landing-btn-container" >
                        <Button raised accent ripple className= "landing-option-btn" onClick= {this.openSignUp}>sign up</Button>
                        <Button raised accent ripple className= "landing-option-btn" onClick= {this.openLogIn}>sign in</Button>
                    </div>
                </div>
                <SignUp/> 
                <Login {...this.props}/> 
            </div>
        )
    }
}


export default LandingWelcome;
import React, { Component } from 'react';
import '../welcomeUserTitle/welcomeuserT.scss';

class WelcomeUserT extends Component {
    state={
        user: {}
    }
    componentDidMount(){
        const loggedInUser = 
        JSON.parse(localStorage.getItem('loggedInUser'));
        this.setState(
            {
                user:loggedInUser
            }
        )
    }
    render() {
        return (
            <div className="user-title-container">
                <div className="inline-style">
                    <p className="small-title">welcome</p>
                    <p className="large-title">{this.state.user.firstName}</p>
                </div>
            </div>
        );
    }
}

export default WelcomeUserT;
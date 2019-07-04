import React, { Component } from 'react';
import { Button } from 'react-mdl';

import '../sign-out/SignOutStyles.scss';
class SignOut extends Component {

    state ={
        email:'',
        password: ''
    }
 

    signOut=() =>{
      localStorage.removeItem("loggedInUser");
      this.props.history.push("/");
    }

  render() {
    return ( 
       <div className="sign-out-wrapper">
          <Button className="global-btn-style" raised accent ripple onClick={this.signOut}>sign out</Button>
       </div> 
    )
  }
}

export default SignOut;
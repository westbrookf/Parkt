import  React, { Component } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogTitle, DialogContent } from 'react-mdl';


import './SigninStyle.scss';
 class SignIn extends Component {

    state ={
        email:'',
        password: ''
    }

    //Sign In Handle Form Modal 
    constructor(props) {
        super(props);
        this.handleOpenDialog = this.handleOpenDialog.bind(this);
        this.handleCloseDialog = this.handleCloseDialog.bind(this);
      }
    
      handleOpenDialog() {
        this.setState({
          openDialog: true
        });
      }
    
      handleCloseDialog() {
        this.setState({
          openDialog: false
        });
      }
    
    //
    signInChangeHandler =(event)=>{
        const key = event.target.name;
        const value = event.target.value;
        this.setState(
            {
                [key]: value

            }
        )
    }

    signInSubmitHandler =(event)=> {
        event.preventDefault();
        const userLogin = {
            email: this.state.email,
            password: this.state.password,
        
        }

        axios.post("http://localhost:8080/login",userLogin)
        .then((response)=>{
            const loggedInUser = response.data;
            localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
            this.props.history.push("/");

        }).catch((error)=>{
            //add error message
        })
    }

  render() {
    return ( 
        // <div className="login-form-wrapper">
        <div className="login-form-wrapper">
            <Button ripple className="signin-btn" onClick={this.handleOpenDialog}>Sign In</Button>
            <Dialog className="landing-login" open={this.state.openDialog} onCancel={this.handleCloseDialog}>
                <DialogTitle>
                <h1 className="login-header">Login</h1>
                </DialogTitle>
                <div className="sign-in-underline"></div>
                <DialogContent>
                    <form onSubmit={this.signInSubmitHandler}className="landing-login-form">
                        <input onChange={this.signInChangeHandler} value={this.state.email} name="email"className="log-in-input login-email-input" type="text" placeholder="Email" required/>
                        <input onChange={this.signInChangeHandler} value={this.state.password} name="password"className="log-in-input login-password-input" type="password" placeholder="Password" required/>
                        <div className="login-submit-btn">
                            <Button className="global-btn-style" raised accent ripple type="submit" onClick ={this.handleCloseDialog}>sign in</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
  }
}

export default SignIn;
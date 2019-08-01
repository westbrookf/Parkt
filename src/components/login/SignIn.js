import  React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { Button } from 'react-mdl';
import Home from '../home/Home';


import './LoginStyle.scss';
 class Login extends Component {

    state ={
        email:'',
        password: ''
    }
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
        <div className="login-form-wrapper">
            <div className="landing-login">
                <h1 className="login-header">Login</h1>
                <form onSubmit={this.signInSubmitHandler}className="landing-login-form">
                   
                    <input onChange={this.signInChangeHandler} value={this.state.email} name="email"className="log-in-input login-email-input" type="text" placeholder="Email" required/>
                    <input onChange={this.signInChangeHandler} value={this.state.password} name="password"className="log-in-input login-password-input" type="password" placeholder="Password" required/>
                    <div className="login-submit-btn">
                        <Button className="global-btn-style" raised accent ripple type="submit">sign in</Button>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}

export default Login;
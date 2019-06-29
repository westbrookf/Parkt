import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'react-mdl';

// Component CSS
import '../sign-up/SignUpStyles.scss';

//Global CSS
import '../../styles/scss/globalStyles/GlobalStyles.scss';

class SignUp extends Component {
    
    state = {
        user: {
            firstName:'',
            lastName:'',
            age: '',
            telephone: '',
            email: '',
            password: ''
        }
    }

    signUpChangeHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        let tempUser = {...this.state.user};
        tempUser[key] = value;

        this.setState({
            user:tempUser
        })
    }
    signUpSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/submitUserDetails', this.state.user)
        .then((response) => {
            this.props.history.push('thank-you');
        }).catch((error) => {
            //Handle error here
        })
    }

    render() {
        return (
            <div className="signup-container">
                <div className="sign-up-form-style">
                    <h3 className="sign-up-title">Sign Up!</h3>
                    <form className="container" onSubmit={this.signUpSubmitHandler}>
                        <div className="form-row">
                            <div className="col">
                                <input onChange={this.signUpChangeHandler} value={this.state.user.firstName} name="firstName" type="text" className="form-control signup-input" placeholder="First Name" required/>
                            </div>
                            <div className="col">
                                <input onChange={this.signUpChangeHandler} value={this.state.user.lastName} name="lastName" type="text" className="form-control signup-input" placeholder="Last Name" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input onChange={this.signUpChangeHandler} value={this.state.user.telephone} name="telephone" type="text" className="form-control signup-input" placeholder="Telephone" required/>
                            </div>
                            <div className="col">
                                <input onChange={this.signUpChangeHandler} value={this.state.user.age} name="age" type="text" className="form-control signup-input" placeholder="Age" required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col">
                                <input onChange={this.signUpChangeHandler} value={this.state.user.email} name="email" type="text" className="form-control signup-input" placeholder="Email" required/>
                            </div>
                            <div className="col">
                                <input onChange={this.signUpChangeHandler} value={this.state.user.password} name="password" type="text" className="form-control signup-input" placeholder="Password" required />
                            </div>
                        </div>
                        <div className="signup-submit-btn">
                        <Button className="global-btn-style" raised accent ripple type="submit">sign up</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;
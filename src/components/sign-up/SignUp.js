import React, { Component } from 'react';
import {  Button, Dialog, DialogTitle, DialogContent } from 'react-mdl';

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
    //Handle Sign Up Modal
    constructor(props) {
        super(props);
        // this.state = {};
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
    signUpChangeHandler = (event) => {
        const key = event.target.name;
        const value = event.target.value;

        let tempUser = {...this.state.user};
        tempUser[key] = value;

        this.setState({
            user:tempUser
        })
    }

    render() {
        return (
            <div className="signup-modal-container">
                <Button ripple className="signup-btn" onClick={this.handleOpenDialog}>Sign Up</Button>
                <Dialog open={this.state.openDialog} className="signup-modal">
                    <DialogTitle className="signup-title">Sign Up!</DialogTitle>
                    <div className="sign-up-underline"></div>
                    <DialogContent className="signup-content" >
                        <form className="container" onSubmit={this.signUpSubmitHandler}>
                            <div className="form-row">
                                <div className="col">
                                    <input onChange={this.signUpChangeHandler} value={this.state.user.firstName} name="firstName" type="text" className="signup-input" placeholder="First Name" required/>
                                </div>
                                <div className="col">
                                    <input onChange={this.signUpChangeHandler} value={this.state.user.lastName} name="lastName" type="text" className="signup-input" placeholder="Last Name" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    {/* <input onChange={this.signUpChangeHandler} value={this.state.user.telephone} name="telephone" type="text" className=" signup-input" placeholder="Telephone"/> */}
                                </div>
                                <div className="col">
                                    <input onChange={this.signUpChangeHandler} value={this.state.user.age} name="age" type="text" className="signup-input" placeholder="Age" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input onChange={this.signUpChangeHandler} value={this.state.user.email} name="email" type="text" className="signup-input" placeholder="Email" required/>
                                </div>
                                <div className="col">
                                    <input onChange={this.signUpChangeHandler} value={this.state.user.password} name="password" type="text" className="signup-input" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="signup-submit-btn">
                                <Button raised accent ripple onClick = {this.handleCloseDialog} className="global-btn-style"  type="submit">sign up</Button>
                            </div>
                        </form>                    
                    </DialogContent>
                </Dialog>
            </div>
            // <div className="signup-container">
            //     <div className="sign-up-form-style">
            //     </div>
            // </div>
        );
    }
}

export default SignUp;
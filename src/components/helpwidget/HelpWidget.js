import React, { Component } from 'react';
import { Button, Snackbar} from 'react-mdl';

class HelpWidget extends Component {
    constructor(props) {
        super(props);
        this.handleShowSnackbar = this.handleShowSnackbar.bind(this);
        this.handleTimeoutSnackbar = this.handleTimeoutSnackbar.bind(this);
        this.state = { isSnackbarActive: false };
      }
    
      handleShowSnackbar() {
        this.setState({ isSnackbarActive: true });
      }
      handleTimeoutSnackbar() {
        this.setState({ isSnackbarActive: false });
      }
    render() {
        const { isSnackbarActive } = this.state;
        return (
            <div>
                <Button raised onClick={this.handleShowSnackbar}>Show a Toast</Button>
                <Snackbar active={isSnackbarActive} onTimeout={this.handleTimeoutSnackbar}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius luctus quam. Fusce quis blandit libero. Donec accumsan nunc lectus, vel blandit diam bibendum ac. Integer faucibus, lorem et convallis fermentum, diam dolor imperdiet mi, nec iaculis risus mauris id elit. Vivamus vel eros dapibus, molestie ante ut, vestibulum sem.
                </Snackbar>
            </div>
        );
    }
}

export default HelpWidget;
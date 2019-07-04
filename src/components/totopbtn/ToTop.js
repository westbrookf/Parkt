import React, { Component } from 'react';
import { Button } from 'react-mdl';

import '../totopbtn/ToTopStyles.scss';

class ToTop extends Component {
    componentDidMount() {
        window.onscroll = () => {
            if (document.body.scrollTop > 6 || document.documentElement.scrollTop > 6) {
                const topBtnWrapper = document.querySelector(".top-btn-wrapper");
                topBtnWrapper.style.opacity = "1";
                topBtnWrapper.style.transform = "scale(1)";
                topBtnWrapper.style.transition = ".5s";
            } else {
                const topBtnWrapper = document.querySelector(".top-btn-wrapper");
                topBtnWrapper.style.opacity = "0";
                topBtnWrapper.style.transform = "scale(0)";
                topBtnWrapper.style.transition = ".5s";
            }
        }
    }

    toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render() {
        return (
            <div className="top-btn-wrapper">
                <Button raised accent ripple className="to-top-btn" onClick= {this.toTop}>top</Button>
            </div>
        );
    }
}

export default ToTop;
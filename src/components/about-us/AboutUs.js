import React, { Component } from 'react';
import ToTop from '../totopbtn/ToTop';
import '../about-us/AboutUsStyles.scss';


class AboutUs extends Component {
    render() {
        return (
            <div className="aboutus-comp-wrapper">
                <div className="about-showcase">
                    <div className="close-aboutus-container">
                        <h3> X </h3>
                    </div>
                </div>
                < ToTop />
                <div className="our-story-block">
                    <div className="story-header">
                        <h3>who we are</h3>
                        <div className="underline"></div>
                    </div>
                    <div className="our-story">
                        <p>Forgetting where you parked is a trend none of us want to follow. We noticed this was a problem that was happening all around us. At first we thought, why hasn't anyone come up with a solution to this ongoing trend? 
                            something that can help the everyday person. Well... they have, but you either have to be driving a 40,000+ dollar vehicle, or be utilizing the companies services, on their premisses. That is why Parkt was created, to give the eveyday person the ability to always remember where they parked their vehicle. </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs;
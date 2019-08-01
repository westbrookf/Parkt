import React from 'react';
import '../googlemap/MapStyles.scss';


function MarkerSvg(){
        return(
                <svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <animate 
                        to="#back"
                        attributeName="r"
                        from="5.3"
                        to="10"
                        dur="1.7s"
                        begin="0s"
                        repeatCount="indefinite"
                        fill="freeze" 
                        id="circ-anim"
                    />
                    <animate 
                        to="#back"
                        attributeType="CSS" attributeName="opacity"
                        from="1"
                        to="0"
                        dur="1.7s"
                        begin="0s"
                        repeatCount="indefinite"
                        fill="freeze" 
                        id="circ-anim"
                    />
                    <circle id="back" cx="10" cy="10" r="6.8" stroke-width="1"/>
                    <circle class="middle" cx="10" cy="10" r="5.8"/>
                    <circle class="front" cx="10" cy="10" r="4.5"/>
                </svg>
        )
}

export default MarkerSvg;
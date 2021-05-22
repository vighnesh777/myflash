import React from 'react';
import './Landing.css';
import unnamed from "../assets/unnamed.png";
import Typewriter from 'typewriter-effect';

const Landing = () => {
    return (
        <div className="Landing-cont">
            <div data-aos="fade-right"
                data-aos-easing="ease-in-sine" class="Landing-left">
                <h1 className="Landing-header">Can you type...</h1>
                <div className="type-cont">
                    <Typewriter
                        options={{
                            strings: ['Fast?', 'Quick?', 'Like Flash?'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
            </div>
            <div data-aos="fade-left" className="Landing-right">
                <img src={unnamed} className="flash" alt="flash" />
            </div>
        </div>
    );
}
export default Landing;
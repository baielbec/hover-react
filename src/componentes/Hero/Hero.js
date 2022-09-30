import React from 'react';
import '../../Style/Hero/Hero.scss'

const Hero = () => {
    return (
        <div id="Hero">
            <div className="container">
                <div className="Hero-navbar">
                    <div className="Hero-Chapter">
                       <h1> Wait! You're Almost There!</h1>
                        <h2 className="Hero-Chapter-Just">Just One More Step To Go</h2>
                    </div>
                    <div className="Hero-need">
                        You'll need to go through all the registration steps to gain access to our education platform, <br/>
                        and then you can start learning. We have something special for you today.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
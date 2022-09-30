import React from 'react';
import '../../Style/About/About.scss'

const About = () => {
    return (
        <div id="About">
            <div className="container">
                <div className="About-nav">
                    <div className="About-nav-entire">
                        <h3 className="About-nav-entire-text"> Add 14 days of free access to entire Sacrill curriculum <br/>
                            of best-in-class programs to your purchase.</h3>
                        <h4 className="About-nav-entire-text">We make it available only once for new customers like you!</h4>
                    </div>
                    <div className="About-nav-all">
                        <h4 className="About-nav-entire-text">
                            What you get on the next step:
                        </h4>
                        <p className="About-nav-entire-text">
                             - Unlimited access to 50+ best-in-class programs to improve health, relationships, self-realization, <br/>
                             - Unlimited access to Customizable learning for your unique goals, preferences, behaviors, and desired growth<br/>
                             - Mobile and laptop course access<br/>
                             - Quick subscription cancelation. Your free trial is 100% safe<br/>
                             - PLUS: this free trial option is available on this page only. You don't need to make a decision now.<br/>
                        </p>
                        <h4 className="About-nav-entire-text">
                            Try for 14 days risk-free. After free trial only $49 per month.
                            Push the green button below to continue
                        </h4>
                    </div>
                    <div className="About-nav-loo">
                        <button className="About-nav-button">
                            Yes! Try Sacrill Club For Free And Continue With 50+ Courses
                        </button>
                        <p className="About-nav-loo-text">
                            No, I don’t want to take this amazing opportunity and want to continue with only one program
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
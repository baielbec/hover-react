import React from 'react';
import '../../Style/Invest/Invest.scss'
import Logo from "../../image/Rectangle 702.svg"
import Logoo from "../../image/Rectangle 703.svg"
import Logok from "../../image/Rectangle 704.svg"
import Logol from "../../image/Rectangle 705.svg"
import Logom from "../../image/Rectangle 707.svg"
import Logon from "../../image/Rectangle 706.svg"

const Invest = () => {
    return (
        <div id="Invest">
            <div className="container">
                <div className="Invest-item">
                    <div className="Invest-item-your">
                        <h1 className="Invest-item-your-col"> Invest In Your Skills</h1>
                        <p className="Invest-item-your-col"> That's right, self-development. When you develop,
                            everything around you grows with you: <br/> your
                            career, your quality of life, and your ability to control your own destiny.</p>
                        <p>
                            Gaining new skills and knowledge with courses is a great modern form of
                            education. <br/> Apply your
                            new skills on a daily basis and improve your life quality!
                        </p>
                    </div>
                    <div className="Invest-item-img">
                        <div>
                            <img className="Invest-item-imagee" src={Logo} alt=""/>
                            Body health
                        </div>
                        <div>
                            <img className="Invest-item-imagee" src={Logol} alt=""/>
                            Emotional
                        </div>
                        <div>
                            <img className="Invest-item-imagee" src={Logok} alt=""/>
                            Relationship
                        </div>
                        <div>
                            <img className="Invest-item-imagee" src={Logoo} alt=""/>
                            Self-realization
                        </div>
                        <div>
                            <img className="Invest-item-imagee" src={Logon} alt=""/>
                            Dancing
                        </div>
                        <div><img className="Invest-item-imagee" src={Logom} alt=""/>
                            Massage and body
                            <br/>therapy
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Invest;
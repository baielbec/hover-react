import React from "react";
import img from "../../image/Rectangle 1.svg"

const Best = () => {

    return (
        <div id="Best">
            <div className="container">
                <div className="Best-item">
                    <div className="Best-item-glava">
                        <h1>Best-Selling Programs <br/>
                            are Included in Membership</h1>
                    </div>
                    <div className="Best-item-slider">
                        <div className="Best-item-img">
                            <img src={img} alt=""/>
                            <h3> El masaje es como una <br/>
                                danza de amor</h3>
                            <p>Zinovieva Irina</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Best;